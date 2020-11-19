import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MacroscopesComponent } from './macroscopes.component';

const routes: Routes = [{ path: '', component: MacroscopesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MacroscopesRoutingModule { }
