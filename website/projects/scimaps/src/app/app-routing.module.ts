import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksModule } from './pages/books/books.module';

const routes: Routes = [
  { path: 'books', loadChildren: () => BooksModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
