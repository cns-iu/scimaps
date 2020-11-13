import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MacroscopesPageComponent } from './macroscopes-page.component';

const routes: Routes = [{ path: '', component: MacroscopesPageComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MacroscopesPageRoutingModule { }
