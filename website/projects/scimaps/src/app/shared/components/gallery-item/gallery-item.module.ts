import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { GalleryItemComponent } from './gallery-item.component';
import { DrawerModule } from '../drawer/drawer.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [GalleryItemComponent],
  imports: [
    CommonModule,
    DrawerModule,
    MatIconModule
  ],
  exports: [GalleryItemComponent]
})
export class GalleryItemModule { }
