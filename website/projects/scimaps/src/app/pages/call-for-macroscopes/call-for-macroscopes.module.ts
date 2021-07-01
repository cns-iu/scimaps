import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { CallForMacroscopesRoutingModule } from './call-for-macroscopes-routing.module';
import { CallForMacroscopesComponent } from './call-for-macroscopes.component';
import { CallOutModule } from '../../shared/components/call-out/call-out.module';
import { TabHeaderModule } from '../../shared/components/tab-header/tab-header.module';
import { SharedModule } from '../../shared/shared.module';
import { MarkdownModule } from 'ngx-markdown';
import { MatIconModule } from '@angular/material/icon';
import { DrawerModule } from '../../shared/components/drawer/drawer.module';

@NgModule({
  declarations: [CallForMacroscopesComponent],
  imports: [
    CommonModule,
    CallForMacroscopesRoutingModule,
    CallOutModule,
    TabHeaderModule,
    MarkdownModule,
    MatIconModule,
    DrawerModule,
    SharedModule
  ],
  providers: [ DatePipe] 
})
export class CallForMacroscopesModule { }
