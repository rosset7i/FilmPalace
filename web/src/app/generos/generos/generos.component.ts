import {Component, OnInit} from '@angular/core';

import {NotificationService} from 'src/app/notification.service';
import {GeneroOutput} from "../services/models/genero-output";
import {GeneroService} from "../services/genero.service";

@Component({
  selector: 'app-generos',
  templateUrl: './generos.component.html',
  styleUrls: ['./generos.component.css'],
})
export class GenerosComponent implements OnInit {
  generosList: GeneroOutput[] = [];
  colunas = ['nome', 'acoes'];

  constructor(
    private generoService: GeneroService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.carregarGeneros();
  }

  carregarGeneros() {
    this.generoService.getAll()
      .subscribe(generos => {
        this.generosList = generos;
      });
  }

  delete(idGenero: string) {
    this.generoService.delete(idGenero)
      .subscribe(() => {
        this.carregarGeneros();
        this.notificationService
          .sendMessage('O genero foi excluido com sucesso!');
      });
  }

}
