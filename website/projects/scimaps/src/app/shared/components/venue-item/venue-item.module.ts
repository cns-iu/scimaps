import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { VenueItemComponent } from './venue-item.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [VenueItemComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [VenueItemComponent],
  providers: [DatePipe]
})
export class VenueItemModule { }
