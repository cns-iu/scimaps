import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../../../shared/shared.module';
import { HeaderComponent } from './header.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatButtonModule,
    MatMenuModule,

    SharedModule
  ],
  declarations: [HeaderComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
