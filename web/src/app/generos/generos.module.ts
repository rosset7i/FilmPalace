import {ReactiveFormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MaterialModule} from '../material/material.module';
import {GenerosRoutingModule} from './generos-routing.module';
import {TransitivoModule} from '../transitivo/transitivo.module';
import {EditarGeneroComponent} from './editar-genero/editar-genero.component';
import {FormGeneroComponent} from './form-genero/form-genero.component';
import {CriarGeneroComponent} from './criar-genero/criar-genero.component';
import {GenerosComponent} from './generos/generos.component';

@NgModule({
  declarations: [
    GenerosComponent,
    EditarGeneroComponent,
    FormGeneroComponent,
    CriarGeneroComponent,
  ],
  imports: [
    CommonModule,
    GenerosRoutingModule,
    MaterialModule,
    TransitivoModule,
    ReactiveFormsModule,
  ],
})
export class GenerosModule {
}
