import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  senha!: string;
  senhaErrada: boolean = false;
  f = FormControl;
  constructor(private formBd: FormBuilder) {}

  form!: FormGroup;

  public hide: boolean = true;

  ngOnInit(): void {
    this.form = this.formBd.group({
      email: this.formBd.control('', [Validators.required, Validators.email]),
      password: this.formBd.control('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(16),
      ]),
    });
  }
  verificarSenha() {
    this.senhaErrada = this.senha.length < 8;
  }
  onSubmit() {
    let login = new LoginService(
      this.form.value.email,
      this.form.value.password
    );

    console.log(login);
  }

  getErrorMessage(prop: string) {

    if (this.element(prop)!.hasError('required')) {
      return 'Campo não pode ser vazio';
    }else  if (this.element(prop)!.hasError('email')) {
      return 'Email não está válido';
    }
    return 'Senha deve ter ao menos de 8 caracteres';
  }
  element(key : string) {
    return this.form.get(key);
  }
}
