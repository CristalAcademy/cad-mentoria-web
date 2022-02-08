import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { MenuService } from './../../services/menu.service';
import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/Model/PerfilEnum';
import { Menu } from 'src/app/Model/Menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {


  public perfil!: Perfil;
  public nomeUser!: string;

  open: boolean = false;

  menu!: Menu[];

  constructor(
    private menuService: MenuService,
    public userService: UserService,
    private router: Router) { }

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
