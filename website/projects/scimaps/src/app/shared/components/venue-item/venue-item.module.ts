import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { VenueItemComponent } from './venue-item.component';
import { MatIconModule } from '@angular/material/icon';
import { DrawerModule } from '../drawer/drawer.module';
import { GalleryItemModule } from '../gallery-item/gallery-item.module';



@NgModule({
  declarations: [VenueItemComponent],
  imports: [
    CommonModule,
    MatIconModule,
    DrawerModule,
    GalleryItemModule
  ],
  exports: [VenueItemComponent],
  providers: [DatePipe]
})
export class VenueItemModule { }
