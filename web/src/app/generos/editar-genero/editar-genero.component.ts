import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {NotificationService} from 'src/app/notification.service';
import {GeneroService} from "../services/genero.service";
import {GeneroOutput} from "../services/models/genero-output";

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css'],
})
export class EditarGeneroComponent implements OnInit {
  currentId = this.activatedRoute.snapshot.paramMap.get('generoId');
  generoModel: GeneroOutput;

  constructor(
    private activatedRoute: ActivatedRoute,
    private generoService: GeneroService,
    private router: Router,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.generoService.getById(this.currentId)
      .subscribe(genero => {
        this.generoModel = genero;
      });
  }

  salvarMudancas(updateGenero: GeneroOutput) {
    this.generoService.put(updateGenero)
      .subscribe(() => {
        this.notificationService.sendMessage('O gênero foi editado com sucesso!');
        this.router.navigate(['generos']);
      });
  }
}
