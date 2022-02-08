import { PasswordService } from './../../services/password.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-atualizar-senha',
  templateUrl: './atualizar-senha.component.html',
  styleUrls: ['./atualizar-senha.component.scss'],
})
export class AtualizarSenhaComponent implements OnInit {
  f = FormControl;
  constructor(
    private formBd: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private passwordService: PasswordService
  ) {}

  form!: FormGroup;

  public hide: boolean = true;

  hash!: string;
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
    this.hash = this.activatedRoute.snapshot.paramMap.get('hash') || '';
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
    if (
      this.hash.length > 1 &&
      this.form.value.password == this.form.value.passwordC
    ) {
      this.passwordService.attPass(this.form.value.password, this.hash);
    }else{
      alert("Isso :" +(this.hash.length > 1) + " e isso : "+ (this.form.value.password == this.form.value.passwordC))
    }
  }
}
