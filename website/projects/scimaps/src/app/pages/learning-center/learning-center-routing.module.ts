import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsResolverService } from '../blogs/blogs-resolver.service';
import { MakerVideosResolverService } from '../maker-videos/maker-videos-resolver.service';
import { LearningCenterBodyResolverService } from './learning-center-body-resolver.service';
import { LearningCenterComponent } from './learning-center.component';

const routes: Routes = [
  { 
    path: '',
    component: LearningCenterComponent,
    resolve: {
      body: LearningCenterBodyResolverService,
      blogs: BlogsResolverService,
      videos: MakerVideosResolverService
    },
    children: [
      {
        path: 'blogs',
        loadChildren: () => import('../blogs/blogs.module').then(m => m.BlogsModule)
      }, {
        path: 'maker-videos',
        loadChildren: () => import('../maker-videos/maker-videos.module').then(m => m.MakerVideosModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningCenterRoutingModule { }
