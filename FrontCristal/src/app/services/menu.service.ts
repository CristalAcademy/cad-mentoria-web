import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Perfil } from '../Model/PerfilEnum';
import { Menu } from '../Model/Menu.model';

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
    this.menu = [];
    switch (perfil) {
      case Perfil.ADMIN:
        this.menu.push({
          titulo: 'Dashboard',
          rota: '/admin/home',
          icon: '/Front/cad-mentoria-web/FrontCristal/src/assets/img/dashboard.svg',
        });
        this.menu.push({
          titulo: 'Sala de aula',
          rota: '/admin/classroom',
          icon: '/Front/cad-mentoria-web/FrontCristal/src/assets/img/classroom.svg',
        });
        this.menu.push({
          titulo: 'Alunos',
          rota: '/admin/aluno',
          icon: '/Front/cad-mentoria-web/FrontCristal/src/assets/img/school-aluno.svg',
        });
        this.menu.push({
          titulo: 'Mentores',
          rota: '/admin/Mentores',
          icon: '/Front/cad-mentoria-web/FrontCristal/src/assets/img/mentor-note.svg',
        });
        this.menu.push({
          titulo: 'Controle de acesso',
          rota: '/admin/security',
          icon: '/Front/cad-mentoria-web/FrontCristal/src/assets/img/controle-de-acesso.svg',
        });
        this.menu.push({
          titulo: 'Candidato',
          rota: '/admin/candidato',
          icon: '/Front/cad-mentoria-web/FrontCristal/src/assets/img/controle-de-acesso.svg',
        });
        return this.menu;
      case Perfil.ALUNO:
        this.menu.push({ titulo: 'Dashboard', rota: '/aluno/home', icon: '' });
        this.menu.push({
          titulo: 'Sala de aula',
          rota: '/aluno/classroom',
          icon: '',
        });
        return this.menu;
      case Perfil.CANDIDATO:
        this.menu.push({
          titulo: 'Dashboard',
          rota: '/candidato/home',
          icon: '',
        });
        return this.menu;
      case Perfil.TUTOR:
        this.menu.push({ titulo: 'Dashboard', rota: '/tutor/home', icon: '' });
        this.menu.push({
          titulo: 'Sala de aula',
          rota: '/tutor/classroom',
          icon: '',
        });
        this.menu.push({ titulo: 'Alunos', rota: '/tutor/aluno', icon: '' });
        return this.menu;
      default:
        this.menu.push({ titulo: 'Dashboard', rota: '/status/404', icon: '' });
        return this.menu;
    }
  }
}
