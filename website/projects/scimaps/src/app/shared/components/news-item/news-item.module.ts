import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MarkdownModule } from 'ngx-markdown';

import { NewsItemComponent } from './news-item.component';


@NgModule({
  declarations: [NewsItemComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MarkdownModule
  ],
  exports: [
    NewsItemComponent
  ]
})
export class NewsItemModule { }
