import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Perfil } from '../Model/perfilEnum';
import { Menu } from '../Model/menu.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {
    this.apiURL = 'http://localhost:8080';
    this.menu = [];
  }
  readonly apiURL!: string;
  menu!: Menu[];

  pegarMenuPorPerfil(perfil: Perfil) {
    switch (perfil) {
      case Perfil.ADMIN:
        this.menu.push({ titulo: 'Dashboard', rota: '/admin/home' });
        this.menu.push({ titulo: 'Sala de aula', rota: '/admin/classroom' });
        this.menu.push({ titulo: 'Alunos', rota: '/admin/aluno' });
        this.menu.push({ titulo: 'Mentores', rota: '/admin/Mentores' });
        this.menu.push({ titulo: 'Controle de acesso', rota: '/admin/security' });
        return this.menu;
      case Perfil.ALUNO:
        this.menu.push({ titulo: 'Dashboard', rota: '/home' });
        this.menu.push({ titulo: 'Sala de aula', rota: '/classroom' });
        this.menu.push({ titulo: 'Alunos', rota: '/aluno' });
        this.menu.push({ titulo: 'Mentores', rota: '/Mentores' });
        this.menu.push({ titulo: 'Controle de acesso', rota: '/security' });
        return this.menu;
      case Perfil.CANDIDATO:
        this.menu.push({ titulo: 'Dashboard', rota: '/home' });
        this.menu.push({ titulo: 'Sala de aula', rota: '/classroom' });
        this.menu.push({ titulo: 'Alunos', rota: '/aluno' });
        this.menu.push({ titulo: 'Mentores', rota: '/Mentores' });
        this.menu.push({ titulo: 'Controle de acesso', rota: '/security' });
        return this.menu;
      case Perfil.TUTOR:
        this.menu.push({ titulo: 'Dashboard', rota: '/home' });
        this.menu.push({ titulo: 'Sala de aula', rota: '/classroom' });
        this.menu.push({ titulo: 'Alunos', rota: '/aluno' });
        this.menu.push({ titulo: 'Mentores', rota: '/Mentores' });
        this.menu.push({ titulo: 'Controle de acesso', rota: '/security' });
        return this.menu;
      default:
        this.menu.push({ titulo: 'Dashboard', rota: '/home' });
        this.menu.push({ titulo: 'Sala de aula', rota: '/classroom' });
        this.menu.push({ titulo: 'Alunos', rota: '/aluno' });
        this.menu.push({ titulo: 'Mentores', rota: '/Mentores' });
        this.menu.push({ titulo: 'Controle de acesso', rota: '/security' });
        return this.menu;
    }
  }
}
