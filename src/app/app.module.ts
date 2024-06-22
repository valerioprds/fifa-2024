import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPlayerComponent } from './shared/components/card-player/card-player.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { BackBtnComponent } from './shared/components/back-btn/back-btn.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { LangBtnComponent } from './shared/components/lang-btn/lang-btn.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { PlayersModule } from './modules/players/players.module';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    CardPlayerComponent,
    SidebarComponent,
    BackBtnComponent,
    BreadcrumbsComponent,
    LangBtnComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PlayersModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
