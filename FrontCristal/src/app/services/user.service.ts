import { Perfil } from './../Model/PerfilEnum';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

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
}

