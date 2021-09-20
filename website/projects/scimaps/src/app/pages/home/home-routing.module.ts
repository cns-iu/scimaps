import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBodyResolverService } from './home-body-resolver.service';

import { HomeComponent } from './home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data : {
      class: 'home-module'
    },
    resolve: {
      homeBody: HomeBodyResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
