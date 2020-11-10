import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
