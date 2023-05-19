import {Router} from '@angular/router';
import {Component} from '@angular/core';

import {NotificationService} from 'src/app/notification.service';
import {FilmeService} from "../services/filme.service";
import {FilmeOutput} from "../services/models/filme-output";

@Component({
  selector: 'app-criar-filmes',
  templateUrl: './criar-filmes.component.html',
  styleUrls: ['./criar-filmes.component.css'],
})
export class CriarFilmesComponent {
  constructor(
    private filmeService: FilmeService,
    private router: Router,
    private notificationService: NotificationService
  ) {
  }

  salvarMudancas(createFilmeInput: FilmeOutput) {
    this.filmeService.post(createFilmeInput)
      .subscribe(() => {
        this.notificationService.sendMessage('O filme foi criado com sucesso!');
        this.router.navigate(['/']);
      });
  }

}
