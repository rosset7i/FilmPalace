import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CriarGeneroComponent} from './criar-genero/criar-genero.component';
import {EditarGeneroComponent} from './editar-genero/editar-genero.component';
import {GenerosComponent} from './generos/generos.component';

const routes: Routes = [
  {
    path: '',
    component: GenerosComponent
  },
  {
    path: 'editar/:generoId',
    component: EditarGeneroComponent
  },
  {
    path: 'criar',
    component: CriarGeneroComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GenerosRoutingModule {
}
