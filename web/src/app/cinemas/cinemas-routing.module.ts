import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CinemasComponent} from './cinemas/cinemas.component';
import {CriarCinemasComponent} from './criar-cinemas/criar-cinemas.component';
import {EditarCinemaComponent} from './editar-cinema/editar-cinema.component';

const routes: Routes = [
  {
    path: '',
    component: CinemasComponent
  },
  {
    path: 'editar/:cinemaId',
    component: EditarCinemaComponent
  },
  {
    path: 'criar',
    component: CriarCinemasComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CinemasRoutingModule {
}
