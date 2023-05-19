import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {NotificationService} from 'src/app/notification.service';
import {CinemaOutput} from "../services/models/cinema-output";
import {CinemaService} from "../services/cinema.service";

@Component({
  selector: 'app-editar-cinema',
  templateUrl: './editar-cinema.component.html',
  styleUrls: ['./editar-cinema.component.css'],
})
export class EditarCinemaComponent implements OnInit {
  cinemaId = this.activatedRoute.snapshot.paramMap.get('cinemaId');
  cinemaModel: CinemaOutput;

  constructor(
    private activatedRoute: ActivatedRoute,
    private cinemaService: CinemaService,
    private router: Router,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.cinemaService.getById(this.cinemaId)
      .subscribe(cinema => {
        this.cinemaModel = cinema;
      });
  }

  salvarMudancas(updateCinemaInput: CinemaOutput) {
    this.cinemaService.put(updateCinemaInput)
      .subscribe(() => {
        this.notificationService.sendMessage('O cinema foi editado com sucesso!');
        this.router.navigate(['/cinemas']);
      });
  }
}
