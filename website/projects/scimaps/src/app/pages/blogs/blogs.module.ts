import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogTileModule } from '../../shared/components/blog-tile/blog-tile.module';
import { BlogModule } from '../../shared/components/blog/blog.module';
import { DrawerHeaderModule } from '../../shared/components/drawer-header/drawer-header.module';
import { DrawerModule } from '../../shared/components/drawer/drawer.module';
import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';


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
