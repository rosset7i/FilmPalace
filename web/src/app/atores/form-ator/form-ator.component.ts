import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DateAdapter} from "@angular/material/core";

import {AtorOutput} from "../services/models/ator-output";

@Component({
  selector: 'app-form-ator',
  templateUrl: './form-ator.component.html',
  styleUrls: ['./form-ator.component.css'],
})
export class FormAtorComponent implements OnInit {
  form: FormGroup;
  @Input() atorModel: AtorOutput;
  @Output() onSalvarMudancas = new EventEmitter<AtorOutput>();

  constructor(
    private formBuilder: FormBuilder,
    private adapter: DateAdapter<any>,
  ) {
    this.adapter.setLocale('br');
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
      dataDeNascimento: ['', [Validators.required]],
    });

    if (this.atorModel) {
      this.atorModel.dataDeNascimento = this.parseDate(this.atorModel.dataDeNascimento);
      this.form.patchValue(this.atorModel);
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
    this.atorModel.nome = this.form.get('nome').value;
    this.atorModel.dataDeNascimento = this.form.get('dataDeNascimento').value;
  }

  salvarMudancas() {
    if (this.atorModel) {
      this.updateModel();
      this.onSalvarMudancas.emit(this.atorModel);
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
