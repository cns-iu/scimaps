import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksModule } from './pages/books/books.module';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
  { path: 'books', loadChildren: () => BooksModule },
  { path: 'maps', loadChildren: () => import('./pages/maps/maps.module').then(m => m.MapsModule) },
  { path: 'macroscopes', loadChildren: () => import('./pages/macroscopes/macroscopes.module').then(m => m.MacroscopesModule) },
  { path: 'hosting', loadChildren: () => import('./pages/hosting/hosting.module').then(m => m.HostingModule) },
  { path: 'venues', loadChildren: () => import('./pages/venues/venues.module').then(m => m.VenuesModule) },
  {
    path: 'learning-center',
    loadChildren: () => import('./pages/learning-center/learning-center.module').then(m => m.LearningCenterModule)
  },
  {
    path: 'call-for-macroscopes',
    loadChildren: () => import('./pages/call-for-macroscopes/call-for-macroscopes.module').then(m => m.CallForMacroscopesModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
