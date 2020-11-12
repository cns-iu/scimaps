import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NewsItemListModule } from './shared/news-item-list/news-item-list.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,

    MatIconModule,

    AppRoutingModule,
    CoreModule,
    NewsItemListModule,

    SharedModule,
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(registry: MatIconRegistry, sanitizer: DomSanitizer) {
    const icons = [
      { namespace: 'social', name: 'twitter', url: 'assets/social-media-logos/twitter.svg' }
    ];

    for (const icon of icons) {
      const { namespace, name, url: rawUrl } = icon;
      const url = sanitizer.bypassSecurityTrustResourceUrl(rawUrl);
      registry.addSvgIconInNamespace(namespace, name, url);
    }
  }
}
