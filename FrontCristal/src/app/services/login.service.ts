import { Router } from '@angular/router';
import { responseLogin } from './../Model/responseLogin.model';
import { LoginModel } from './../Model/Login.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient,
    private router: Router) {
    this.apiURL = 'http://localhost:8080';
  }

  readonly apiURL!: string;

  logar(loginModel:LoginModel) {
    var user = {
      email: loginModel.email,
      senha: loginModel.senha
    };

    this.http.post<responseLogin>(`${this.apiURL}/login`, user)
    .subscribe(
      (resultado) => {
        alert('Seja bem-vindo '+resultado.nome+" você é um " + resultado.profile);
        this.router.navigateByUrl('/status/0');
      },
      (erro) => {
        alert("Encontramos erros: " + erro.message)
      }
    );
  }
}
