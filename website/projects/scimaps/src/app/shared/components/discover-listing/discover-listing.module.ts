import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { DiscoverListingComponent } from './discover-listing.component';
import { WarningDialogModule } from '../warning-dialog/warning-dialog.module';
import { SharedModule } from '../../shared.module';

@NgModule({
  declarations: [DiscoverListingComponent],
  imports: [
    CommonModule,
    MarkdownModule,
    WarningDialogModule,
    SharedModule
  ],
  exports: [DiscoverListingComponent]
})
export class DiscoverListingModule { }
