import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/home-page.component';
import { DetailsPageComponent } from './pages/details/details-page.component';
import { VideosPageComponent } from './pages/videos/videos-page.component';


const routes: Routes = [
  {
    path: '',
    data: {
      breadcrumb: 'Home',
    },
    children: [
      {
        path: '',
        data: {
          breadcrumb: null,
        },
        component: HomePageComponent,
      },
      {
        path: 'details/:id',
        data: {
          breadcrumb: 'Details',
        },
        children: [
          {
            path: '',
            data: {
              breadcrumb: null,
            },
            component: DetailsPageComponent,
          },
          {
            path: 'videos',
            data: {
              breadcrumb: 'Videos',
            },
            component: VideosPageComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlayersRoutingModule {}
