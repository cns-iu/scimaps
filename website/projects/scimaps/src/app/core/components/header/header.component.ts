import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { Params } from '@angular/router';
import { Select } from '@ngxs/store';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { PageState } from '../../state/page/page.state';


/**
 * Page header component
 */
@Component({
  selector: 'sci-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  /** HTML classes */
  @HostBinding('class') readonly clsName = 'sci-header mat-display-3';

  /**
   * Whether the sidenav button is in open mode
   */
  @Input() sidenavOpen = false;

  /**
   * Emits whenever the sidenav buttton is clicked
   */
  @Output() sidenavOpenChange = new EventEmitter<boolean>();
  @ViewChild('exhibitTrigger') exhibitTrigger!: MatMenuTrigger;
  @ViewChild('contactTrigger') contactTrigger!: MatMenuTrigger;
  @ViewChild('exploreTrigger') exploreTrigger!: MatMenuTrigger;
  exhibitStream: Subject<Params> = new Subject<Params>();
  contactStream: Subject<Params> = new Subject<Params>();
  exploreStream: Subject<Params> = new Subject<Params>();
  @Select(PageState.drawer) drawer$!: Observable<Params>;

  ngOnInit(): void {
    this.exhibitStream.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((payload: Params) => {
        return of(payload);
      })
    ).subscribe((payload) => {
      if (payload.type === 'mouseenter') {
        this.exhibitTrigger.openMenu();
      } else {
        this.exhibitTrigger?.closeMenu();
      }
    });

    this.contactStream.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((payload: Params) => {
        return of(payload);
      })
    ).subscribe((payload) => {
      if (payload.type === 'mouseenter') {
        this.contactTrigger.openMenu();
      } else {
        this.contactTrigger.closeMenu();
      }
    });

    this.exploreStream.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((payload: Params) => {
        return of(payload);
      })
    ).subscribe((payload) => {
      if (payload.type === 'mouseenter') {
        this.exploreTrigger.openMenu();
      } else {
        this.exploreTrigger.closeMenu();
      }
    });
  }

  mouseEvents(e: Event, index: number): void {
    if (index === 0) {
      this.exhibitStream.next({ type: e.type, event: e, index });
    } else if (index === 1) {
      this.contactStream.next({ type: e.type, event: e, index });
    } else {
      this.exploreStream.next({ type: e.type, event: e, index });
    }
  }
}
