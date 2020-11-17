import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscoverListingComponent } from './discover-listing.component';
import { WarningDialogModule } from '../warning-dialog/warning-dialog.module';



@NgModule({
  declarations: [DiscoverListingComponent],
  imports: [
    CommonModule,
    WarningDialogModule
  ],
  exports: [DiscoverListingComponent]
})
export class DiscoverListingModule { }
