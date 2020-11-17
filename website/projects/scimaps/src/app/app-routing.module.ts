import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksModule } from './pages/books/books.module';

import { MacroscopesPageModule } from './pages/macroscopes-page/macroscopes-page.module';

const routes: Routes = [
  { path: 'macroscopes', loadChildren: () => MacroscopesPageModule },
  { path: 'books', loadChildren: () => BooksModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
