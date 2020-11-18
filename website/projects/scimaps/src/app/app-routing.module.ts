import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksModule } from './pages/books/books.module';
import { MapsPageModule } from './pages/maps-page/maps-page.module';

const routes: Routes = [
  { path: 'books', loadChildren: () => BooksModule },
  { path: 'maps', loadChildren: () => MapsPageModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
