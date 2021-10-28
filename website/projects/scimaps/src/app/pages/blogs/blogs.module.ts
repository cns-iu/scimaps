import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { DrawerModule } from '../../shared/components/drawer/drawer.module';
import { DrawerHeaderModule } from '../../shared/components/drawer-header/drawer-header.module';
import { BlogDetailModule } from '../../shared/components/blog-detail/blog-detail.module';


@NgModule({
  declarations: [BlogsComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    DrawerModule,
    DrawerHeaderModule,
    BlogDetailModule
  ]
})
export class BlogsModule { }
