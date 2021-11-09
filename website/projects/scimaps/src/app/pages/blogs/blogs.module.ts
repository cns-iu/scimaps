import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { DrawerModule } from '../../shared/components/drawer/drawer.module';
import { DrawerHeaderModule } from '../../shared/components/drawer-header/drawer-header.module';
import { BlogModule } from '../../shared/components/blog/blog.module';
import { BlogTileModule } from '../../shared/components/blog-tile/blog-tile.module';

@NgModule({
  declarations: [BlogsComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    DrawerModule,
    DrawerHeaderModule,
    BlogModule,
    BlogTileModule
  ]
})
export class BlogsModule { }
