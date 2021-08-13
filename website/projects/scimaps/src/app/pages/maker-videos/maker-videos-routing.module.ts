import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MakerVideosComponent } from './maker-videos.component';

const routes: Routes = [{
  path: '',
  component: MakerVideosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakerVideosRoutingModule { }
