import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SeletorComponent} from './seletor/seletor.component';

@NgModule({
  declarations: [SeletorComponent],
  imports: [CommonModule],
  exports: [SeletorComponent],
})
export class TransitivoModule {
}
