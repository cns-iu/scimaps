import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallForMacroscopesRoutingModule } from './call-for-macroscopes-routing.module';
import { CallForMacroscopesComponent } from './call-for-macroscopes.component';


@NgModule({
  declarations: [CallForMacroscopesComponent],
  imports: [
    CommonModule,
    CallForMacroscopesRoutingModule
  ]
})
export class CallForMacroscopesModule { }
