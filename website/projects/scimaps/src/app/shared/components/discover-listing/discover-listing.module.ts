import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { DiscoverListingComponent } from './discover-listing.component';
import { WarningDialogModule } from '../warning-dialog/warning-dialog.module';

const routes: Routes = [
  { path: 'map', loadChildren: () => import('../../../pages/map/map.module').then(m => m.MapModule)},
  { path: 'macroscope', loadChildren: () => import('../../../pages/macroscope/macroscope.module').then(m => m.MacroscopeModule) },
]

@NgModule({
  declarations: [DiscoverListingComponent],
  imports: [
    CommonModule,
    MarkdownModule,
    WarningDialogModule,
    RouterModule.forChild(
      routes
    )
  ],
  exports: [DiscoverListingComponent]
})
export class DiscoverListingModule { }
