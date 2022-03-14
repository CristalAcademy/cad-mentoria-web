import { SnackbarComponent } from './../snackbar/snackbar.component';
import { LoginModel } from './../../Model/Login.model';
import { LoginService } from './../../services/login.service';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  senha!: string;
  senhaErrada: boolean = false;
  f = FormControl;
  constructor(
    private formBd: FormBuilder,
    private loginService: LoginService,
    private _snackBar: MatSnackBar
  ) {}

  form!: FormGroup;

  fmsg: string = 'Test';

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
    let login = new LoginModel(this.form.value.email, this.form.value.password);

    this.loginService.logar(login);
  }

  getErrorMessage(prop: string): string {
    if (this.element(prop)!.hasError('required')) {
      return 'Campo não pode ser vazio';
    } else if (this.element(prop)!.hasError('email')) {
      return 'Email não está válido';
    } else {
      return 'Senha deve ter ao menos 8 caracteres';
    }
  }
  element(key: string) {
    return this.form.get(key);
  }

  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 23000,
      data: {
        msg: 'textinhoooooooo',
      },
    });
  }
}
