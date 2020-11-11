import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { NewsItemListComponent } from './news-item-list.component';
import { NewsItemModule } from '../news-item/news-item.module';


@NgModule({
  declarations: [NewsItemListComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatSelectModule,
    NewsItemModule
  ],
  exports: [
    NewsItemListComponent
  ]
})
export class NewsItemListModule { }
