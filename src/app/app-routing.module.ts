import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    loadChildren: () =>
      import('./modules/players/players.module').then(
        (mod) => mod.PlayersModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent,
    data: { breadcrumb: { skip: true } },
  },
  // { path: '**', redirectTo: 'error', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
