import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CallForMacroscopesComponent } from './call-for-macroscopes.component';

const routes: Routes = [{ path: '', component: CallForMacroscopesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallForMacroscopesRoutingModule { }
