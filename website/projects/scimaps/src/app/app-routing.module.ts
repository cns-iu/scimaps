import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { BooksModule } from './pages/books/books.module';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'about', loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule) },
  { path: 'books', loadChildren: () => BooksModule },
  {
    matcher: (url: UrlSegment[]) => {
      if (url.length >= 1 && (url[0].path === 'map' || url[0].path === 'maps')) {
        return {
          consumed: [url[0]]
        };
      }
      return null;
    },
    loadChildren: () => import('./pages/maps/maps.module').then(m => m.MapsModule),
    data: { animation: 'Maps' }
  },
  {
    matcher: (url: UrlSegment[]) => {
      if (url.length >= 1 && (url[0].path === 'macroscope' || url[0].path === 'macroscopes')) {
        return {
          consumed: [url[0]]
        };
      }
      return null;
    },
    loadChildren: () => import('./pages/macroscopes/macroscopes.module').then(m => m.MacroscopesModule),
    data: { animation: 'Macroscopes' }
  },
  {
    path: 'hosting',
    loadChildren: () => import('./pages/hosting/hosting.module').then(m => m.HostingModule),
    data: { animation: 'Hosting' }
  },

  {
    path: 'venues',
    loadChildren: () => import('./pages/venues/venues.module').then(m => m.VenuesModule)
  },
  {
    path: 'learning-center',
    loadChildren: () => import('./pages/learning-center/learning-center.module').then(m => m.LearningCenterModule)
  },
  {
    path: 'call-for-macroscopes',
    loadChildren: () => import('./pages/call-for-macroscopes/call-for-macroscopes.module').then(m => m.CallForMacroscopesModule)
  },
  {
    path: 'learning-material',
    loadChildren: () => import('./pages/learning-material/learning-material.module').then(m => m.LearningMaterialModule),
    data: { animation: 'LearningMaterial' }
  },
  {
    path: 'maker-videos',
    loadChildren: () => import('./pages/maker-videos/maker-videos.module').then(m => m.MakerVideosModule)
  },
  {
    path: 'blogs',
    loadChildren: () => import('./pages/blogs/blogs.module').then(m => m.BlogsModule)
  },
  {
    matcher: (url: UrlSegment[]) => {
      if (url.length >= 1 && (url[0].path === 'submission' || url[0].path === 'submissions')) {
        return {
          consumed: [url[0]]
        };
      }
      return null;
    },
    loadChildren: () => import('./pages/submissions/submissions.module').then(m => m.SubmissionsModule),
    data: { animation: 'Macroscopes' }
  },
  // {
  //   path: 'submissions',
  //   loadChildren: () => import('./pages/submissions/submissions.module').then(m => m.SubmissionsModule)
  // },
  {
    path: '**',
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
