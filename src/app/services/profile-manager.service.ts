import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Perfil } from '../Model/PerfilEnum';

@Injectable({
  providedIn: 'root',
})
export class ProfileManagerService {
  constructor(private router: Router) {}

  handler(perfil: Perfil) {
    switch (perfil) {
      case Perfil.ADMIN: {
        this.router.navigateByUrl('portal/admin/home');
        break
      }
      case Perfil.ALUNO: {
        this.router.navigateByUrl('portal/aluno/home');
        break
      }
      default: {
        this.router.navigateByUrl('portal/status/0');
        console.log("Seu perfil é "+perfil)
        break;
      }
    }
  }
}
