import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { HomePageComponent } from './pages/home/home-page.component';
import { DetailsPageComponent } from './pages/details/details-page.component';
import { VideosPageComponent } from './pages/videos/videos-page.component';


@NgModule({
  declarations: [
    HomePageComponent,
    DetailsPageComponent,
    VideosPageComponent
  ],
  imports: [
    CommonModule,
    PlayersRoutingModule
  ]
})
export class PlayersModule { }
