import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallForMacroscopesBodyResolver } from './call-for-macroscopes-body.resolver';

import { CallForMacroscopesComponent } from './call-for-macroscopes.component';

const routes: Routes = [
  { path: '',
    component: CallForMacroscopesComponent,
    resolve: {
      body: CallForMacroscopesBodyResolver
    } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallForMacroscopesRoutingModule { }
