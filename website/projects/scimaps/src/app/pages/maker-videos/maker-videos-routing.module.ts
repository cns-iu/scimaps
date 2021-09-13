import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakerVideoComponent } from '../../shared/components/maker-video/maker-video.component';
import { MakerVideosBodyResolverService } from './maker-videos-body-resolver.service';
import { MakerVideosResolverService } from './maker-videos-resolver.service';
import { MakerVideosComponent } from './maker-videos.component';

const routes: Routes = [
  {
    path: '',
    component: MakerVideosComponent,
    resolve: {
      body: MakerVideosBodyResolverService,
      videos: MakerVideosResolverService
    },
    children: [
      {
        path: ':slug',
        component: MakerVideoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakerVideosRoutingModule { }
