import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenueGalleryComponent } from './venue-gallery.component';
import { DrawerModule } from '../drawer/drawer.module';
import { DrawerHeaderModule } from '../drawer-header/drawer-header.module';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [VenueGalleryComponent],
  imports: [
    CommonModule,
    DrawerModule,
    MatIconModule,
    DrawerHeaderModule
  ],
  exports: [VenueGalleryComponent]
})
export class VenueGalleryModule { }
