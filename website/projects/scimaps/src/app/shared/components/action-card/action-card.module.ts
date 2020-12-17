import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionCardComponent } from './action-card.component';

import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [ActionCardComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [ActionCardComponent]
})
export class ActionCardModule { }
