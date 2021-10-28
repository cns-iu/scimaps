import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { DrawerModule } from '../drawer/drawer.module';
import { DrawerHeaderModule } from '../drawer-header/drawer-header.module';


@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    DrawerModule,
    DrawerHeaderModule
  ],
  exports: [BlogComponent]
})
export class BlogModule { }
