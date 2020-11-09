import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NewsItemModule } from './news-item/news-item.module';
import { NewsItemListComponent } from './news-item-list/news-item-list.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    CoreModule,

    NewsItemModule
  ],
  declarations: [AppComponent, NewsItemListComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
