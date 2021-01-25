import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { DiscoverListingComponent } from './discover-listing.component';
import { WarningDialogModule } from '../warning-dialog/warning-dialog.module';


@NgModule({
  declarations: [DiscoverListingComponent],
  imports: [
    CommonModule,
    MarkdownModule,
    WarningDialogModule
  ],
  exports: [DiscoverListingComponent]
})
export class DiscoverListingModule { }
