import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DrawerHeaderModule } from '../drawer-header/drawer-header.module';
import { DrawerModule } from '../drawer/drawer.module';
import { GalleryItemComponent } from './gallery-item.component';



@NgModule({
  declarations: [GalleryItemComponent],
  imports: [
    CommonModule,
    DrawerModule,
    MatIconModule,
    DrawerHeaderModule
  ],
  exports: [GalleryItemComponent]
})
export class GalleryItemModule { }
