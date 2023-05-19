import {ActivatedRoute, Router} from '@angular/router';
import {Component, OnInit} from '@angular/core';

import {NotificationService} from 'src/app/notification.service';
import {FilmeOutput} from "../services/models/filme-output";
import {FilmeService} from "../services/filme.service";
import {Seletor} from "../../transitivo/seletor/seletor-model";

@Component({
  selector: 'app-editar-filme',
  templateUrl: './editar-filme.component.html',
  styleUrls: ['./editar-filme.component.css'],
})
export class EditarFilmeComponent implements OnInit {
  filmeId = this.activatedRoute.snapshot.paramMap.get('filmeId');
  filmeModel: FilmeOutput;
  generosSelecionados: Seletor[];
  cinemasSelecionados: Seletor[];
  atoresSelecionados: Seletor[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private filmeService: FilmeService,
    private router: Router,
    private notificationService: NotificationService
  ) {
  }

  ngOnInit() {
    this.filmeService.getById(this.filmeId)
      .subscribe(filme => {
        this.filmeModel = filme;

        this.generosSelecionados = filme.generos.map(genero => {
          return <Seletor>{id: genero.id, nome: genero.nome}
        });

        this.cinemasSelecionados = filme.cinemas.map(cinema => {
          return <Seletor>{id: cinema.id, nome: cinema.nome}
        });

        this.atoresSelecionados = filme.atores.map(ator => {
          return <Seletor>{id: ator.id, nome: ator.nome}
        });
      });
  }

  salvarMudancas(updateFilmeInput: FilmeOutput) {
    this.filmeService.put(updateFilmeInput)
      .subscribe(() => {
        this.notificationService.sendMessage('O filme foi editado com sucesso!');
        this.router.navigate(['/']);
      });
  }

}
