import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CarouselModule } from './carousel/carousel.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,
    CoreModule,

    CarouselModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
