import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {AtoresRoutingModule} from './atores-routing.module';
import {MaterialModule} from '../material/material.module';
import {TransitivoModule} from '../transitivo/transitivo.module';
import {AtoresComponent} from './atores/atores.component';
import {CriarAtoresComponent} from './criar-atores/criar-atores.component';
import {EditarAtorComponent} from './editar-ator/editar-ator.component';
import {FormAtorComponent} from './form-ator/form-ator.component';

@NgModule({
  declarations: [
    AtoresComponent,
    CriarAtoresComponent,
    EditarAtorComponent,
    FormAtorComponent,
  ],
  imports: [
    CommonModule,
    AtoresRoutingModule,
    MaterialModule,
    TransitivoModule,
    ReactiveFormsModule,
  ],
})
export class AtoresModule {
}
