import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { MobileHeaderMenuComponent } from './mobile-header-menu.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    MatButtonModule
  ],
  declarations: [MobileHeaderMenuComponent],
  exports: [MobileHeaderMenuComponent]
})
export class MobileHeaderMenuModule { }
