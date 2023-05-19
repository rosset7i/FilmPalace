import {Component, OnInit} from '@angular/core';

import {NotificationService} from 'src/app/notification.service';
import {AtorOutput} from "../services/models/ator-output";
import {AtorService} from "../services/ator.service";

@Component({
  selector: 'app-atores',
  templateUrl: './atores.component.html',
  styleUrls: ['./atores.component.css'],
})
export class AtoresComponent implements OnInit {
  atorList: AtorOutput[];
  colunas = ['nome', 'dataDeNascimento', 'acoes'];

  constructor(
    private atorService: AtorService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.loadAtores();
  }

  loadAtores() {
    this.atorService.getAll()
      .subscribe(atores => {
        this.atorList = atores;
      });
  }

  delete(idAtor: string) {
    this.atorService.delete(idAtor)
      .subscribe(() => {
        this.loadAtores();
        this.notificationService.sendMessage('O ator foi excluido com sucesso!');
      });
  }
}
