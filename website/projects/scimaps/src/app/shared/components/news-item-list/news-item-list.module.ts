import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { NewsItemListComponent } from './news-item-list.component';
import { NewsItemModule } from '../news-item/news-item.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [NewsItemListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    NewsItemModule,
  ],
  exports: [
    NewsItemListComponent
  ]
})
export class NewsItemListModule { }
