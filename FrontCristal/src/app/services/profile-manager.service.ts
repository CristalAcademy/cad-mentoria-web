import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Perfil } from '../Model/PerfilEnum';

@Injectable({
  providedIn: 'root',
})
export class ProfileManagerService {
  constructor(private router: Router) {}

  handler(perfil: Perfil) {


    console.log(perfil as Perfil)

    switch (perfil) {
      case Perfil.ADMIN: {
        this.router.navigateByUrl('/admin/home');
        break
      }
      case Perfil.ALUNO: {
        this.router.navigateByUrl('/aluno/home');
        break
      }
      default: {
        this.router.navigateByUrl('/status/0');
        console.log("Seu perfil é "+perfil)
        break;
      }
    }
  }
}
