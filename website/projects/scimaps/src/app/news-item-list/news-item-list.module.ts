import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsItemListComponent } from './news-item-list.component';


@NgModule({
  declarations: [NewsItemListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NewsItemListComponent
  ]
})
export class NewsItemListModule { }
