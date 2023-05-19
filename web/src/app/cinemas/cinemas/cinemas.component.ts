import {Component, OnInit} from '@angular/core';

import {NotificationService} from 'src/app/notification.service';
import {CinemaOutput} from "../services/models/cinema-output";
import {CinemaService} from "../services/cinema.service";

@Component({
  selector: 'app-cinemas',
  templateUrl: './cinemas.component.html',
  styleUrls: ['./cinemas.component.css'],
})
export class CinemasComponent implements OnInit {
  cinemaList: CinemaOutput[];
  colunas = ['nome', 'acoes'];

  constructor(
    private cinemaService: CinemaService,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit(): void {
    this.carregarCinema();
  }

  carregarCinema() {
    this.cinemaService.getAll()
      .subscribe(cinema => {
        this.cinemaList = cinema;
      });
  }

  delete(idCinema: string) {
    this.cinemaService.delete(idCinema)
      .subscribe(() => {
        this.carregarCinema();
        this.notificationService.sendMessage('O cinema foi excluido com sucesso');
      });
  }
}
