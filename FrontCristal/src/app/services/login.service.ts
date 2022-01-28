import { Router } from '@angular/router';
import { ResponseLogin } from './../Model/responseLogin.model';
import { LoginModel } from './../Model/Login.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Perfil } from '../Model/perfilEnum';

@Injectable({
  providedIn: 'root'
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

    this.http.post<ResponseLogin>(`${this.apiURL}/authenticate`, user)
    .subscribe(
      (resultado) => {
        if(resultado.perfil==Perfil.ADMIN){
          this.router.navigateByUrl('/admin/home');
        }else{
        this.router.navigateByUrl('/status/0');
      }
      },
      (erro) => {
        alert("Encontramos erros: " + erro.message)
      }
    );
  }
}
