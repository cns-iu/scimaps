import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsResolverService } from './blogs-resolver.service';
import { LearningCenterBodyResolverService } from './learning-center-body-resolver.service';
import { LearningCenterComponent } from './learning-center.component';

const routes: Routes = [
  { 
    path: '',
    component: LearningCenterComponent,
    resolve: {
      body: LearningCenterBodyResolverService,
      blogs: BlogsResolverService
    },
    children: [
      {
        path: 'blogs',
        loadChildren: () => import('../blogs/blogs.module').then(m => m.BlogsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningCenterRoutingModule { }
