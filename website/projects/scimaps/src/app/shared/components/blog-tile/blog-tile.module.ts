import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BlogTileComponent } from './blog-tile.component';



@NgModule({
  declarations: [BlogTileComponent],
  imports: [
    CommonModule
  ],
  exports: [BlogTileComponent]
})
export class BlogTileModule { }
