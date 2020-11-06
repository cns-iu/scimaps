import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

import { StateModule } from './state/state.module';


@NgModule({
  imports: [
    NgxGoogleAnalyticsModule.forRoot('UA-54599506-1'),
    NgxGoogleAnalyticsRouterModule,

    StateModule,
  ],
  exports: [
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() other: CoreModule | null) {
    if (other) {
      throw new Error('CoreModule should only be imported once in the AppModule!');
    }
  }
}
