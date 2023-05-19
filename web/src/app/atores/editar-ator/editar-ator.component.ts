import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {AtorOutput} from "../services/models/ator-output";
import {AtorService} from "../services/ator.service";
import {NotificationService} from "../../notification.service";

@Component({
  selector: 'app-editar-ator',
  templateUrl: './editar-ator.component.html',
  styleUrls: ['./editar-ator.component.css'],
})
export class EditarAtorComponent implements OnInit {
  atorId = this.activatedRoute.snapshot.paramMap.get('atorId');
  atorModel: AtorOutput;

  constructor(
    private activatedRoute: ActivatedRoute,
    private atorService: AtorService,
    private router: Router,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.atorService.getById(this.atorId)
      .subscribe(ator => {
        this.atorModel = ator;
      });
  }

  salvarMudancas(updateAtorInput: AtorOutput) {
    this.atorService.put(updateAtorInput)
      .subscribe(() => {
        this.notificationService.sendMessage('O ator foi editado com sucesso!');
        this.router.navigate(['/atores/']);
      });
  }
}
