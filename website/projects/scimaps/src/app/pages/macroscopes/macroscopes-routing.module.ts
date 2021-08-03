import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MacroscopesBodyResolverService } from './macroscopes-body-resolver.service';
import { MacroscopesResolverService } from './macroscopes-resolver.service';
import { MacroscopesComponent } from './macroscopes.component';


const routes: Routes = [{
  path: '',
  component: MacroscopesComponent,
  resolve: {
    macroscopes: MacroscopesResolverService,
    body: MacroscopesBodyResolverService
  },
  children: [
    {
      path: '',
      loadChildren: () => import('../macroscope/macroscope.module').then(m => m.MacroscopeModule),
      data: { animation: 'Macroscope', type: 'macroscope'}
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MacroscopesRoutingModule { }
