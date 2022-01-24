import { Router, ActivatedRoute, Params} from '@angular/router';
import { DialogComponent } from './../dialog/dialog.component';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-atualizar-senha',
  templateUrl: './atualizar-senha.component.html',
  styleUrls: ['./atualizar-senha.component.scss'],
})
export class AtualizarSenhaComponent implements OnInit {
  f = FormControl;
  constructor(private formBd: FormBuilder, public dialog: MatDialog, private activatedRoute: ActivatedRoute) {}

  form!: FormGroup;

  public hide: boolean = true;
  ngOnInit() {

    this.form = this.formBd.group({
      password: this.formBd.control('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ]),
      passwordC: this.formBd.control('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ]),
    });
    this.activatedRoute.snapshot.paramMap.get('id');

  }

  getErrorMessage(prop: string) {
    if (this.element(prop)!.hasError('required')) {
      return 'Campo não pode ser vazio';
    }
    return 'Senha deve ter ao menos de 8 caracteres';
  }

  element(key: string) {
    return this.form.get(key);
  }

  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
