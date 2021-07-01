import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MacroscopesResolverService } from '../macroscopes/macroscopes-resolver.service';
import { CallForMacroscopesBodyResolver } from './call-for-macroscopes-body-resolver.service';

import { CallForMacroscopesComponent } from './call-for-macroscopes.component';

const routes: Routes = [
  { path: '',
    component: CallForMacroscopesComponent,
    resolve: {
      body: CallForMacroscopesBodyResolver,
      macroscopes: MacroscopesResolverService
    } 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CallForMacroscopesRoutingModule { }
