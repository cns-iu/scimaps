import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MacroscopesPageModule } from './pages/macroscopes-page/macroscopes-page.module';

const routes: Routes = [
  { path: 'macroscopes', loadChildren: () => MacroscopesPageModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
