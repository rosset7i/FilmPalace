import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CriarFilmesComponent} from './criar-filmes/criar-filmes.component';
import {EditarFilmeComponent} from './editar-filme/editar-filme.component';
import {ListaFilmesComponent} from './lista-filmes/lista-filmes.component';

const routes: Routes = [
  {
    path: '',
    component: ListaFilmesComponent
  },
  {
    path: 'criar',
    component: CriarFilmesComponent
  },
  {
    path: 'editar/:filmeId',
    component: EditarFilmeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilmesRoutingModule {
}
