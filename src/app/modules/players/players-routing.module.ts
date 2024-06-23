import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { DetailsPageComponent } from './pages/details/details-page.component';
import { VideosPageComponent } from './pages/videos/videos-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    data: { breadcrumb: 'home' },
  },
  {
    path: 'details/:id',
    component: DetailsPageComponent,
    data: { breadcrumb: 'details' },
  },
  {
    path: 'details/:id/videos',
    component: VideosPageComponent,
    data: { breadcrumb: 'videos' },
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayersRoutingModule {}
