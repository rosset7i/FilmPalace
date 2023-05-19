import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {MaterialModule} from '../material/material.module';
import {TransitivoModule} from '../transitivo/transitivo.module';
import {CinemasRoutingModule} from './cinemas-routing.module';
import {CinemasComponent} from './cinemas/cinemas.component';
import {CriarCinemasComponent} from './criar-cinemas/criar-cinemas.component';
import {EditarCinemaComponent} from './editar-cinema/editar-cinema.component';
import {FormCinemaComponent} from './form-cinema/form-cinema.component';

@NgModule({
  declarations: [
    CinemasComponent,
    CriarCinemasComponent,
    EditarCinemaComponent,
    FormCinemaComponent,
  ],
  imports: [
    CommonModule,
    CinemasRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    TransitivoModule,
  ],
})
export class CinemasModule {
}
