import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailRoutingModule } from './blog-detail-routing.module';
import { BlogDetailComponent } from './blog-detail.component';


@NgModule({
  declarations: [BlogDetailComponent],
  imports: [
    CommonModule,
    BlogDetailRoutingModule
  ]
})
export class BlogDetailModule { }
