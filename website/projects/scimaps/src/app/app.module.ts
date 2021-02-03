import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { BreakpointRegistryService } from './shared/services/breakpoint-registry.service';
import { SharedModule } from './shared/shared.module';

import { MapsComponent } from '../app/pages/maps/maps.component';
import { MapComponent } from '../app/pages/map/map.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatIconModule,
    MatSidenavModule,

    MarkdownModule.forRoot({
      loader: HttpClientModule,
      markedOptions: {
        provide: MarkedOptions,
        useValue: {
          gfm: true
        }
      }
    }),

    AppRoutingModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot([
      { path: 'maps', component: MapsComponent, data: {animation: 'Maps'}},
      { path: 'map', component: MapComponent, data: {animation: 'Map'}}
    ])
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(
    registry: MatIconRegistry,
    sanitizer: DomSanitizer,
    bpr: BreakpointRegistryService
  ) {
    const icons = [
      { namespace: 'social', name: 'twitter', url: 'assets/social-media-logos/twitter.svg' },
      { namespace: 'social', name: 'instagram', url: 'assets/social-media-logos/instagram.svg' },
      { namespace: 'social', name: 'email', url: 'assets/social-media-logos/email.svg' },
      { namespace: 'social', name: 'facebook', url: 'assets/social-media-logos/facebook.svg' }
    ];

    for (const icon of icons) {
      const { namespace, name, url: rawUrl } = icon;
      const url = sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
      registry.addSvgIconInNamespace(namespace, name, url);
    }

    this.registerBreakpoints(bpr);
  }

  private registerBreakpoints(bpr: BreakpointRegistryService): void {
    bpr.addBreakpoint('desktop', 1248);
    bpr.addBreakpoint('tablet', 960);
    bpr.addBreakpoint('mobile', 640);
  }
}
