import { Directive, EmbeddedViewRef, Input, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';

import { BreakpointRegistryService } from '../services/breakpoint-registry.service';
import { MediaQueryService } from '../services/media-query.service';


/**
 * Directive for adding/removing dom content based on screen width/height
 * using named breakpoints.
 * This directive supports the same syntax as ngIf (except `as varname`)
 */
@Directive({
  selector: '[sciBreakpoint]'
})
export class BreakpointDirective implements OnDestroy {
  /**
   * Sets breakpoint name with an optional trailing `+` or `-`.
   * `-` matches the breakpoint and all smaller breakpoints.
   * `+` matches the breakpoint and all larger breakpoints.
   * If no trailing `+` or `-` is provided it defaults to `+`.
   */
  @Input() set sciBreakpoint(value: string) {
    this.updateQuery(value);
  }

  /**
   * Sets the template to display when truthy
   */
  @Input() set sciBreakpointThen(templateRef: TemplateRef<unknown>) {
    this.thenTemplateRef = templateRef;
    this.thenViewRef = undefined;
    this.updateView();
  }

  /**
   * Sets the template to display when falsy
   */
  @Input() set sciBreakpointElse(templateRef: TemplateRef<unknown>) {
    this.elseTemplateRef = templateRef;
    this.elseViewRef = undefined;
    this.updateView();
  }

  /** Whether the query is currently matching */
  private matches = false;
  /** Template to render when truthy */
  private thenTemplateRef?: TemplateRef<unknown>;
  /** Template to render when falsy */
  private elseTemplateRef?: TemplateRef<unknown>;
  /** Currently active view if truthy */
  private thenViewRef?: EmbeddedViewRef<unknown>;
  /** Currently active view when falsy */
  private elseViewRef?: EmbeddedViewRef<unknown>;
  /** Subscriptions managed by this directive */
  private subscriptions?: Subscription;

  /**
   * Creates an instance of breakpoint directive.
   *
   * @param viewContainer The view container to add content to
   * @param mq Service for matching the breakpoint queries
   * @param bpr Service for finding named breakpoint definitions
   * @param templateRef The initial template reference on which the directive is attached
   */
  constructor(
    private readonly viewContainer: ViewContainerRef,
    private readonly mq: MediaQueryService,
    private readonly bpr: BreakpointRegistryService,
    templateRef: TemplateRef<unknown>
  ) {
    this.thenTemplateRef = templateRef;
  }

  /**
   * Cleans up subscriptions
   */
  ngOnDestroy(): void {
    this.subscriptions?.unsubscribe();
  }

  /**
   * Updates the breakpoint definition used to match on
   *
   * @param value The breakpoint name
   */
  private updateQuery(value: string): void {
    const { bpr, mq, subscriptions } = this;
    subscriptions?.unsubscribe();

    const last = value.slice(-1);
    if (last === '+' || last === '-') {
      value = value.slice(0, -1);
    }

    const breakpoint = bpr.getBreakpoint(value);
    if (!breakpoint) {
      this.matches = false;
      this.updateView();
      return;
    }

    const prefix = last === '-' ? 'max' : 'min';
    const query = `(${prefix}-${breakpoint.dimension}: ${breakpoint.size}${breakpoint.units})`;

    this.subscriptions = mq.createStream(query).subscribe(matches => {
      this.matches = matches;
      this.updateView();
    });
  }

  /**
   * Updates the content based on the matching state of the breakpoint query
   */
  private updateView(): void {
    const {
      matches,
      thenTemplateRef, thenViewRef,
      elseTemplateRef, elseViewRef,
      viewContainer
    } = this;

    if (matches && !thenViewRef) {
      viewContainer.clear();
      this.elseViewRef = undefined;
      if (thenTemplateRef) {
        this.thenViewRef = viewContainer.createEmbeddedView(thenTemplateRef);
        this.thenViewRef.markForCheck();
      }
    } else if (!matches && !elseViewRef) {
      viewContainer.clear();
      this.thenViewRef = undefined;
      if (elseTemplateRef) {
        this.elseViewRef = viewContainer.createEmbeddedView(elseTemplateRef);
        this.elseViewRef.markForCheck();
      }
    }
  }
}
