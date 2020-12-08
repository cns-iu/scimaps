import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

import { ContactModule } from './components/contact/contact.module';
import { FooterModule } from './components/footer/footer.module';
import { HeaderModule } from './components/header/header.module';
import { MobileHeaderMenuModule } from './components/mobile-header-menu/mobile-header-menu.module';
import { StateModule } from './state/state.module';


@NgModule({
  imports: [
    NgxGoogleAnalyticsModule.forRoot('UA-54599506-1'),
    NgxGoogleAnalyticsRouterModule,

    StateModule,

    ContactModule,
    FooterModule,
    HeaderModule,
    MobileHeaderMenuModule,
  ],
  exports: [
    ContactModule,
    FooterModule,
    HeaderModule,
    MobileHeaderMenuModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() other: CoreModule | null) {
    if (other) {
      throw new Error('CoreModule should only be imported once in the AppModule!');
    }
  }
}
