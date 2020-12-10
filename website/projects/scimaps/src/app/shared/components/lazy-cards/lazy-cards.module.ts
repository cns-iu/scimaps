import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyCardsComponent } from './lazy-cards.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [LazyCardsComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [LazyCardsComponent]
})
export class LazyCardsModule { }
