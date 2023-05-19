import {Router} from '@angular/router';
import {Component} from '@angular/core';

import {NotificationService} from 'src/app/notification.service';
import {AtorService} from "../services/ator.service";
import {AtorOutput} from "../services/models/ator-output";

@Component({
  selector: 'app-criar-atores',
  templateUrl: './criar-atores.component.html',
  styleUrls: ['./criar-atores.component.css'],
})
export class CriarAtoresComponent {
  constructor(
    private atorService: AtorService,
    private router: Router,
    private notificationService: NotificationService
  ) {
  }

  salvarMudancas(createAtorInput: AtorOutput) {
    this.atorService.post(createAtorInput)
      .subscribe(() => {
        this.router.navigate(['/atores']);
        this.notificationService.sendMessage('O ator foi criado com sucesso');
      });
  }
}
