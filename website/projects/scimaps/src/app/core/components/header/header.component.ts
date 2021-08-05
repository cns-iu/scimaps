import { AfterViewInit, ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';
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
export class HeaderComponent implements OnInit, AfterViewInit {
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
  exhibitStream: Subject<Params> = new Subject<Params>();
  contactStream: Subject<Params> = new Subject<Params>();
  @Select(PageState.drawer) drawer$!: Observable<Params>;

  ngOnInit() {
    this.exhibitStream.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      switchMap((payload: Params) => {
        return of(payload);
      })
    ).subscribe((payload) => {
      if (payload.type === 'mouseenter') {
        if (this.contactTrigger.menuOpen) {
          this.contactTrigger.closeMenu();
        }
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
        if (this.exhibitTrigger.menuOpen) {
          this.exhibitTrigger.closeMenu();
        }
        this.contactTrigger.openMenu();
      } else {
        this.contactTrigger.closeMenu();
      }
    });
  }

  exhibitEvents(e: Event, index: number) {
    this.exhibitStream.next({ type: e.type, event: e, index });
  }
  contactEvents(e: Event, index: number) {
    this.contactStream.next({ type: e.type, event: e, index });
  }
  ngAfterViewInit(): void {
    console.log(this.exhibitTrigger);
    console.log(this.contactTrigger);
  }
}
