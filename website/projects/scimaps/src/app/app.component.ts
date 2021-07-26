import { AfterViewInit, Component, NgZone, OnDestroy, ViewChild } from '@angular/core';
import { MatSidenavContainer } from '@angular/material/sidenav';
import { Params, RouterOutlet } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, of, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { drawerInOut, slideWithTransform } from './constants/drawer.animations';
import { routeTransitionAnimations } from './constants/route.animations';
import { SetAppState } from './core/actions/app.actions';
import { PageState } from './core/state/page/page.state';
import { NewsItem } from './shared/components/news-item/news-item.model';


@Component({
  selector: 'sci-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    // routeTransitionAnimations,
    slideWithTransform,
    drawerInOut
  ]
})
export class AppComponent implements OnDestroy, AfterViewInit {
  @ViewChild(MatSidenavContainer) sidenavContainer!: MatSidenavContainer;

  hasPageScrolled = false;
  sidenavOpen = false;
  windowScrollSubscription: Subscription | undefined;

  newsItem: NewsItem = {
    title: 'The Places & Spaces: Mapping Science comes to Virginia Tech at the University Libraries',
    date: new Date(2020, 2, 2),
    publication: 'Library News',
    institution: 'Virginia Tech',
    thumbnail: 'assets/images/rose.jpg',
    pdfLink: 'link'
  };

  footerParameters = {
    phoneNumber: '812-855-9930',
    acknowledgement: 'This exhibit is supported by the National Science Foundation under Grant No. IIS-0238261, CHE-0524661, IIS-0534909 and IIS-0715303, the James S. McDonnell Foundation; Thomson Reuters; the Cyberinfrastructure for Network Science Center, University Information Technology Services, and the School of Library and Information Science, all three at Indiana University. Some of the data used to generate the science maps is from the Web of Science by Thomson Reuters and Scopus by Elsevier. Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.'
  };

  @Select(PageState.drawer) drawer$!: Observable<Params>;
  constructor(private zone: NgZone, private store: Store) {
  }

  prepareRoute(outlet: RouterOutlet): string {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  prepareClass(outlet: RouterOutlet): string {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.class;
  }

  ngOnDestroy(): void {
    if (this.windowScrollSubscription) {
      this.windowScrollSubscription.unsubscribe();
    }
  }

  ngAfterViewInit(): void {
    const cdkScrollable = this.sidenavContainer.scrollable;
    this.windowScrollSubscription = cdkScrollable.elementScrolled().pipe(
      map(() => {
        return cdkScrollable.measureScrollOffset('top');
      }),
      debounceTime(10),
      distinctUntilChanged(),
      switchMap((scrollY: number) => {
        return of(scrollY);
      })
    ).subscribe((scrollY: number) => {
      this.zone.run(() => {
        if (scrollY <= 0) {
          this.hasPageScrolled = false;
        } else {
          this.hasPageScrolled = true;
        }
      });
    });
  }

  onActivate(): void {
    const cdkScrollable = this.sidenavContainer.scrollable;
    cdkScrollable.scrollTo({top: 0, left: 0});
  }

  closeDrawer(): void {
    this.store.dispatch(new SetAppState({drawer: {
      showDrawer: false
    }}));
  }
}
