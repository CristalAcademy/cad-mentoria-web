import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Perfil } from '../Model/PerfilEnum';
import { Menu } from '../Model/Menu.model';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {
    this.apiURL = environment.path;
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
          icon: '../../assets/img/dashboard.svg',
        });
        this.menu.push({
          titulo: 'Sala de aula',
          rota: '/admin/classroom',
          icon: '/../../assets/img/classroom.svg',
        });
        this.menu.push({
          titulo: 'Alunos',
          rota: '/admin/aluno',
          icon: '/../../assets/img/school-aluno.svg',
        });
        this.menu.push({
          titulo: 'Mentores',
          rota: '/admin/Mentores',
          icon: '/../../assets/img/mentor-note.svg',
        });
        this.menu.push({
          titulo: 'Controle de acesso',
          rota: '/admin/security',
          icon: '/../../assets/img/controle-de-acesso.svg',
        });
        this.menu.push({
          titulo: 'Candidato',
          rota: '/admin/home',
          icon: '/../../assets/img/candidato.svg',
        });
        return this.menu;
      case Perfil.ALUNO:
        this.menu.push({ titulo: 'Dashboard', rota: '/admin/home', icon: '' });
        this.menu.push({
          titulo: 'Sala de aula',
          rota: '/admin/classroom',
          icon: '',
        });
        this.menu.push({ titulo: 'Alunos', rota: '/admin/aluno', icon: '' });
        this.menu.push({
          titulo: 'Mentores',
          rota: '/admin/Mentores',
          icon: '',
        });
        this.menu.push({
          titulo: 'Controle de acesso',
          rota: '/admin/security',
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
