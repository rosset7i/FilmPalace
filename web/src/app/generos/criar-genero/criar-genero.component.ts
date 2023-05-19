import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {NotificationService} from 'src/app/notification.service';
import {GeneroService} from "../services/genero.service";
import {GeneroOutput} from "../services/models/genero-output";

@Component({
  selector: 'app-criar-genero',
  templateUrl: './criar-genero.component.html',
  styleUrls: ['./criar-genero.component.css'],
})
export class CriarGeneroComponent {

  constructor(
    private router: Router,
    private generoService: GeneroService,
    private notificationService: NotificationService
  ) {
  }

  salvarMudancas(createGeneroInput: GeneroOutput) {
    this.generoService.post(createGeneroInput)
      .subscribe(() => {
        this.router.navigate(['/generos']);
        this.notificationService.sendMessage('O gênero foi criado com sucesso!');
      });
  }

}
