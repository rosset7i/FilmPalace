import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AtoresComponent} from './atores/atores.component';
import {CriarAtoresComponent} from './criar-atores/criar-atores.component';
import {EditarAtorComponent} from './editar-ator/editar-ator.component';

const routes: Routes = [
  {
    path: '',
    component: AtoresComponent
  },
  {
    path: 'criar',
    component: CriarAtoresComponent
  },
  {
    path: 'editar/:atorId',
    component: EditarAtorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AtoresRoutingModule {
}
