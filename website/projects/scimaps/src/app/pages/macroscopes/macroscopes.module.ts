import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MacroscopesRoutingModule } from './macroscopes-routing.module';
import { MacroscopesComponent } from './macroscopes.component';


@NgModule({
  declarations: [MacroscopesComponent],
  imports: [
    CommonModule,
    MacroscopesRoutingModule
  ]
})
export class MacroscopesModule { }
