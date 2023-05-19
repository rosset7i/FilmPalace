import {Component, Input, OnInit} from '@angular/core';

import {NotificationService} from 'src/app/notification.service';
import {FilmeService} from "../services/filme.service";
import {FilmeOutput} from "../services/models/filme-output";

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css'],
})
export class ListaFilmesComponent implements OnInit {
  @Input() filmesList: FilmeOutput[];

  constructor(
    private filmeService: FilmeService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.carregarFilmes();
  }

  carregarFilmes() {
    this.filmeService.getAll()
      .subscribe(filme => {
        this.filmesList = filme;
      });
  }

  onRemove(filmeId: string) {
    this.filmeService.delete(filmeId)
      .subscribe(() => {
        this.carregarFilmes();
        this.notificationService.sendMessage('O filme foi excluido com sucesso!');
      });
  }

}
