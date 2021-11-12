import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import { SharedModule } from '../../shared.module';
import { CarouselModule } from '../carousel/carousel.module';
import { DrawerHeaderModule } from '../drawer-header/drawer-header.module';
import { DrawerModule } from '../drawer/drawer.module';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';



@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    DrawerModule,
    DrawerHeaderModule,
    MarkdownModule,
    SharedModule,
    CarouselModule
  ],
  exports: [BlogComponent]
})
export class BlogModule { }
