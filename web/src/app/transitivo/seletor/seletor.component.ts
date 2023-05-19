import {Component, Input} from '@angular/core';

import {Seletor} from './seletor-model';

@Component({
  selector: 'app-seletor',
  templateUrl: './seletor.component.html',
  styleUrls: ['./seletor.component.css'],
})
export class SeletorComponent {
  @Input() itensSelecionados;
  @Input() itensNaoSelecionados;

  constructor() {
  }

  select(item: Seletor, index: number) {
    this.itensSelecionados.push(item);
    this.itensNaoSelecionados.splice(index, 1);
  }

  deselect(item: Seletor, index: number) {
    this.itensNaoSelecionados.push(item);
    this.itensSelecionados.splice(index, 1);
  }

  selecionarTodos() {
    this.itensSelecionados.push(...this.itensNaoSelecionados);
    this.itensNaoSelecionados = [];
  }

  deselecionarTodos() {
    this.itensNaoSelecionados.push(...this.itensSelecionados);
    this.itensSelecionados = [];
  }
}
