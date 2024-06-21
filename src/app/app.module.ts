import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPlayerComponent } from './shared/components/card-player/card-player.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { BackBtnComponent } from './shared/components/back-btn/back-btn.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { LangBtnComponent } from './shared/components/lang-btn/lang-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPlayerComponent,
    SidebarComponent,
    BackBtnComponent,
    BreadcrumbsComponent,
    LangBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
