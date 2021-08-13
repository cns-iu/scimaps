import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakerVideosBodyResolverService } from './maker-videos-body-resolver.service';
import { MakerVideosComponent } from './maker-videos.component';

const routes: Routes = [{
  path: '',
  component: MakerVideosComponent,
  resolve: {
    body: MakerVideosBodyResolverService
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakerVideosRoutingModule { }
