import { Perfil } from 'src/app/Model/PerfilEnum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adm',
  templateUrl: './adm.component.html',
  styleUrls: ['./adm.component.scss'],
})
export class AdmComponent implements OnInit {
  constructor() {}
  perfil: Perfil = Perfil.ADMIN;
  admin!: string;
  ngOnInit(): void {
    this.admin = 'Administrador';
  }
}
