import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { DiscoverListingComponent } from './discover-listing.component';
import { WarningDialogModule } from '../warning-dialog/warning-dialog.module';


@NgModule({
  declarations: [DiscoverListingComponent],
  imports: [
    CommonModule,
    MarkdownModule,
    WarningDialogModule,
    RouterModule
  ],
  exports: [DiscoverListingComponent]
})
export class DiscoverListingModule { }
