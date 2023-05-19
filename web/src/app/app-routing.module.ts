import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'filmes',
    loadChildren: () =>
      import('./filmes/filmes.module').then((m) => m.FilmesModule),
  },
  {
    path: 'generos',
    loadChildren: () =>
      import('./generos/generos.module').then((m) => m.GenerosModule),
  },
  {
    path: 'atores',
    loadChildren: () =>
      import('./atores/atores.module').then((m) => m.AtoresModule),
  },
  {
    path: 'cinemas',
    loadChildren: () =>
      import('./cinemas/cinemas.module').then((m) => m.CinemasModule),
  },
  {
    path: '',
    redirectTo: 'filmes',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
