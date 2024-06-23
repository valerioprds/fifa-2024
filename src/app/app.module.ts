import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackBtnComponent } from './shared/components/back-btn/back-btn.component';
// import { LangBtnComponent } from './shared/components/lang-btn/lang-btn.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { FormsModule } from '@angular/forms';
import { PlayersModule } from './modules/players/players.module';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { BreadcrumbComponent, BreadcrumbItemDirective } from 'xng-breadcrumb';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { BreadCrumbComponent } from './shared/components/bread-crumb/bread-crumb.component';
import { LangBtnComponent } from './shared/components/lang-btn/lang-btn.component';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    BackBtnComponent,
    // LangBtnComponent,
    NotFoundComponent,
    SpinnerComponent,
    SidebarComponent,
    BreadCrumbComponent,
    LangBtnComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    PlayersModule,
    AppRoutingModule,
    HttpClientModule,
    BreadcrumbComponent,
    BreadcrumbItemDirective,
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
