import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionCardComponent } from './action-card.component';

import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';



@NgModule({
  declarations: [ActionCardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MarkdownModule
  ],
  exports: [ActionCardComponent]
})
export class ActionCardModule { }
