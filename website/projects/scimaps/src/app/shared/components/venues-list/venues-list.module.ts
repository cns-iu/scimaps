import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenuesListComponent } from './venues-list.component';




@NgModule({
  declarations: [VenuesListComponent],
  imports: [
    CommonModule
  ],
  exports: [VenuesListComponent]
})
export class VenuesListModule { }
