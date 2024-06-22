import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayersRoutingModule } from './players-routing.module';
import { HomePageComponent } from './pages/home/home-page.component';
import { DetailsPageComponent } from './pages/details/details-page.component';
import { VideosPageComponent } from './pages/videos/videos-page.component';
import { TranslateModule } from '@ngx-translate/core';
import { SidebarComponent } from '../../shared/components/sidebar/sidebar.component';
import { CardPlayerComponent } from '../../shared/components/card-player/card-player.component';
import { SheetComponent } from './pages/details/components/sheet/sheet.component';
//import { BreadcrumbsComponent } from '../../shared/components/breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    HomePageComponent,
    DetailsPageComponent,
    VideosPageComponent,
    SidebarComponent,
    CardPlayerComponent,
    SheetComponent,
  ],
  imports: [CommonModule, PlayersRoutingModule, TranslateModule],
})
export class PlayersModule {}
