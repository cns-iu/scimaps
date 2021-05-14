import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './books.component';
import { BooksResolverService } from './books-resolver.service';

const routes: Routes = [
  { 
    path: '',
    component: BooksComponent,
    resolve: {
      books: BooksResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
