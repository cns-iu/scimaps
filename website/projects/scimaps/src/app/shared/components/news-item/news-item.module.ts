import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { NewsItemComponent } from './news-item.component';


@NgModule({
  declarations: [NewsItemComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    NewsItemComponent
  ]
})
export class NewsItemModule { }
