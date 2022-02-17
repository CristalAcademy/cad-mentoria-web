import { LoginModel } from './../../Model/Login.model';
import { LoginService } from './../../services/login.service';
import { CadastroInicialService } from './../../services/cadastro-inicial.service';
import { RequestCadastroInicial } from './../../Model/ResquestCadastroInicial';
import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss'],
})
export class CadastroComponent implements OnInit {
  f = FormControl;
  constructor(
    private formBd: FormBuilder,
    private router: Router,
    private cadastroInicialService: CadastroInicialService,
    private loginService: LoginService
  ) {}

  form!: FormGroup;

  public hide: boolean = true;

  ngOnInit() {
    this.form = this.formBd.group({
      nome: this.formBd.control('', [Validators.required]),
      email: this.formBd.control('', [Validators.required, Validators.email]),
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
  }
  getErrorMessage(prop: string) {
    if (this.element(prop)!.hasError('required')) {
      return 'Campo não pode ser vazio';
    } else if (this.element(prop)!.hasError('email')) {
      return 'Email não está válido';
    }
    return 'Senha deve ter ao menos de 8 caracteres';
  }
  onSubmit() {
    if (!this.form.invalid) {
      let request = new RequestCadastroInicial(
        this.form.value.email,
        this.form.value.nome,
        this.form.value.password
      );

      console.log(request);
      this.cadastroInicialService
        .cadastroInicial(request)
        .subscribe((response) => {
          let login = new LoginModel(request.email, request.senha);
          this.loginService.login(login).subscribe((res) => {
            localStorage.setItem('login', JSON.stringify(res));
            this.router.navigateByUrl('/candidato');
          });
        });
    }
    console.log('Formulario está invalido ');
  }
  element(key: string) {
    return this.form.get(key);
  }
}
