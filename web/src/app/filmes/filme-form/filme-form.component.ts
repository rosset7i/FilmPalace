import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {FilmeOutput} from "../services/models/filme-output";
import {DateAdapter} from "@angular/material/core";
import {Seletor} from "../../transitivo/seletor/seletor-model";
import {FilmeService} from "../services/filme.service";

@Component({
  selector: 'app-filme-form',
  templateUrl: './filme-form.component.html',
  styleUrls: ['./filme-form.component.css'],
})
export class FilmeFormComponent implements OnInit {
  form: FormGroup;
  @Input() filmeModel: FilmeOutput;
  @Output() onSalvarMudancas = new EventEmitter<FilmeOutput>();
  generosNaoSelecionados: Seletor[] = [];
  @Input() generosSelecionados: Seletor[] = [];
  cinemasNaoSelecionados: Seletor[] = [];
  @Input() cinemasSelecionados: Seletor[] = [];
  atoresNaoSelecionados: Seletor[] = [];
  @Input() atoresSelecionados: Seletor[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private filmeService: FilmeService,
    private adapter: DateAdapter<any>,
  ) {
    this.adapter.setLocale('br');
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      noCinema: false,
      dataDeLancamento: ['', [Validators.required]],
      foto: '',
      atores: [],
      generos: [],
      cinemas: [],
    });

    this.filmeService.getEditForm().subscribe(editForm => {
      this.generosNaoSelecionados = editForm.generos;
      this.atoresNaoSelecionados = editForm.atores;
      this.cinemasNaoSelecionados = editForm.cinemas;
    });

    if (this.filmeModel) {
      this.filmeModel.dataDeLancamento = this.parseDate(this.filmeModel.dataDeLancamento);
      this.form.patchValue(this.filmeModel);
    }
  }

  //Metodo pra resolver um bug do JS
  parseDate(date: Date) {
    const stringArray = date.toString()
      .split('-')
      .map(string => parseInt(string));

    return new Date(stringArray[0], stringArray[1] - 1, stringArray[2]);
  }

  updateModel() {
    this.filmeModel.nome = this.form.get('nome').value;
    this.filmeModel.noCinema = this.form.get('noCinema').value;
    this.filmeModel.dataDeLancamento = this.form.get('dataDeLancamento').value;
    this.filmeModel.foto = this.form.get('foto').value;

    const generosId = this.generosSelecionados;
    this.form.get('generos').setValue(generosId);
    this.filmeModel.generos = generosId;

    const cinemasId = this.cinemasSelecionados;
    this.form.get('cinemas').setValue(cinemasId);
    this.filmeModel.cinemas = cinemasId;

    const atoresId = this.atoresSelecionados;
    this.form.get('atores').setValue(atoresId);
    this.filmeModel.atores = atoresId;

  }

  salvarMudancas() {
    if (this.filmeModel) {
      this.updateModel();
      this.onSalvarMudancas.emit(this.filmeModel);
    } else {
      this.onSalvarMudancas.emit(this.form.value);
    }
  }

  mensagemErro() {
    if (this.form.get('nome').hasError('required')) {
      return 'É necessario inserir um valor!';
    }
    return '';
  }

}
