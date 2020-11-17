import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { CarouselModule } from '../carousel/carousel.module';
import { BookOverviewComponent } from './book-overview.component';


@NgModule({
  imports: [CommonModule, MarkdownModule, CarouselModule],
  declarations: [BookOverviewComponent],
  exports: [BookOverviewComponent]
})
export class BookOverviewModule { }
