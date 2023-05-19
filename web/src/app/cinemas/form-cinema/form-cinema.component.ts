import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {CinemaOutput} from "../services/models/cinema-output";

@Component({
  selector: 'app-form-cinema',
  templateUrl: './form-cinema.component.html',
  styleUrls: ['./form-cinema.component.css'],
})
export class FormCinemaComponent implements OnInit {
  form: FormGroup;
  @Input() cinemaModel: CinemaOutput;
  @Output() onSalvarMudancas = new EventEmitter<CinemaOutput>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nome: ['', [Validators.required]],
    });

    this.form.patchValue(this.cinemaModel);
  }

  updateModel() {
    this.cinemaModel.nome = this.form.get('nome').value;
  }

  salvarMudancas() {
    if (this.cinemaModel) {
      this.updateModel();
      this.onSalvarMudancas.emit(this.cinemaModel);
    } else {
      this.onSalvarMudancas.emit(this.form.value);
    }
  }

}
