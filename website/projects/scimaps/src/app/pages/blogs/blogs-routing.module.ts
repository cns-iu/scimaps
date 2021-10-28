import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsResolverService } from '../learning-center/blogs-resolver.service';
import { BlogsComponent } from './blogs.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,
    resolve: {
      blogs: BlogsResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
