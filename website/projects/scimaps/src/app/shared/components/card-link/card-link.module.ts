import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { CardLinkComponent } from './card-link.component';



@NgModule({
  declarations: [CardLinkComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [ CardLinkComponent ]
})
export class CardLinkModule { }
