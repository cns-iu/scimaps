import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallForMacroscopesRoutingModule } from './call-for-macroscopes-routing.module';
import { CallForMacroscopesComponent } from './call-for-macroscopes.component';
import { CallOutModule } from '../../shared/components/call-out/call-out.module';


@NgModule({
  declarations: [CallForMacroscopesComponent],
  imports: [
    CommonModule,
    CallForMacroscopesRoutingModule,
    CallOutModule
  ]
})
export class CallForMacroscopesModule { }
