import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from '../../shared/components/blog/blog.component';
import { BlogsResolverService } from '../learning-center/blogs-resolver.service';
import { BlogsComponent } from './blogs.component';

const routes: Routes = [
  {
    path: '',
    component: BlogsComponent,
    resolve: {
      blogs: BlogsResolverService
    },
    children: [
      {
        path: ':year/:month/:slug',
        component: BlogComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
