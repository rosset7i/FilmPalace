import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {GeneroOutput} from "../services/models/genero-output";

@Component({
  selector: 'app-form-genero',
  templateUrl: './form-genero.component.html',
  styleUrls: ['./form-genero.component.css'],
})
export class FormGeneroComponent implements OnInit {
  form: FormGroup;
  @Input() generoModel: GeneroOutput;
  @Output() onSalvarMudancas = new EventEmitter<GeneroOutput>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]]
    });

    if (this.generoModel) {
      this.form.patchValue(this.generoModel);
    }
  }

  updateModel() {
    this.generoModel.nome = this.form.get('nome').value;
  }

  salvarMudancas() {
    if (this.generoModel) {
      this.updateModel();
      this.onSalvarMudancas.emit(this.generoModel);
    } else {
      this.onSalvarMudancas.emit(this.form.value);
    }
  }

}
