import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {NotificationService} from 'src/app/notification.service';
import {CinemaService} from "../services/cinema.service";
import {CinemaOutput} from "../services/models/cinema-output";

@Component({
  selector: 'app-criar-cinemas',
  templateUrl: './criar-cinemas.component.html',
  styleUrls: ['./criar-cinemas.component.css'],
})
export class CriarCinemasComponent {
  constructor(
    private router: Router,
    private cinemaService: CinemaService,
    private notificationService: NotificationService
  ) {
  }

  salvarMudancas(createCinemaInput: CinemaOutput) {
    this.cinemaService.post(createCinemaInput)
      .subscribe(() => {
        this.router.navigate(['/cinemas/']);
        this.notificationService.sendMessage('O cinema foi criado com sucesso');
      });
  }
}
