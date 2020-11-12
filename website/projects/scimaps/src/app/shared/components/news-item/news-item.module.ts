import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NewsItemComponent } from './news-item.component';


@NgModule({
  declarations: [NewsItemComponent],
  imports: [
    CommonModule
  ],
  exports: [
    NewsItemComponent
  ]
})
export class NewsItemModule { }
