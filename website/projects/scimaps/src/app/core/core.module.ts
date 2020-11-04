import { NgModule, Optional, SkipSelf } from '@angular/core';

import { StateModule } from './state/state.module';


@NgModule({
  imports: [
    // Services
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
