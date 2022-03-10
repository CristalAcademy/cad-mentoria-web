import { Perfil } from './../Model/PerfilEnum';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../Model/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient) { }
  readonly apiURL = environment.path;

  buscarUser() {
    this.http
      .get<User>(`${this.apiURL}/usuarios/me`)
      .subscribe((resultado) => {
        localStorage.setItem('user', JSON.stringify(resultado));
      });
  }

  discoveryEmail(): string {
    let user: {
      email: string;
    } = JSON.parse(localStorage.getItem('login') || '');
    return user.email;
  }

  discoveryPerfil(): Perfil {
    let user: {
      perfil: Perfil;
    } = JSON.parse(localStorage.getItem('login') || '');
    return user.perfil;
  }

  discoveryToken(): string {
    let user: {
      token: string;
    } = JSON.parse(localStorage.getItem('login') || '');
    return user.token;
  }

  discoveryNome(): string{
    let user: {
      nomeCompleto: string;
    } = JSON.parse(localStorage.getItem('user') || '');
    return user.nomeCompleto;
  }
}

