import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CallForMacroscopesRoutingModule } from './call-for-macroscopes-routing.module';
import { CallForMacroscopesComponent } from './call-for-macroscopes.component';
import { CallOutModule } from '../../shared/components/call-out/call-out.module';
import { TabHeaderModule } from '../../shared/components/tab-header/tab-header.module';
import { SharedModule } from '../../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';


@NgModule({
  declarations: [CallForMacroscopesComponent],
  imports: [
    CommonModule,
    CallForMacroscopesRoutingModule,
    CallOutModule,
    TabHeaderModule,
    MarkdownModule,
    SharedModule
  ]
})
export class CallForMacroscopesModule { }
