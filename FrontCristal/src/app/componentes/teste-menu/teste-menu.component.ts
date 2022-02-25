import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { MenuService } from './../../services/menu.service';
import { Perfil } from './../../Model/PerfilEnum';
import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/Model/menu';

@Component({
  selector: 'app-teste-menu',
  templateUrl: './teste-menu.component.html',
  styleUrls: ['./teste-menu.component.scss'],
})
export class TesteMenuComponent implements OnInit {
  public perfil!: Perfil;
  public nomeUser!: string;

  open: boolean = false;

  menu!: Menu[];

  constructor(
    private menuService: MenuService,
    public userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.nomeUser = this.userService.discoveryNome();
    this.perfil = this.userService.discoveryPerfil();
    this.menu = this.menuService.pegarMenuPorPerfil(this.perfil);
  }

  irPara(itens: Menu) {
    this.router.navigateByUrl(itens.rota);
  }

  changeOpen(event: boolean) {
    this.open = event;
  }
}
