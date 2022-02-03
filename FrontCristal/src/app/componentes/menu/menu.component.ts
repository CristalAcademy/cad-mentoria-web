import { Router } from '@angular/router';
import { MenuService } from './../../services/menu.service';
import { Component, Input, OnInit } from '@angular/core';
import { Perfil } from 'src/app/Model/perfilEnum';
import { Menu } from 'src/app/Model/menu.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  //TO-DO WIP
  @Input()
  perfil!: string;

  open: boolean = false;

  menu!: Menu[];

  constructor(private menuService: MenuService, private router: Router) {}

  ngOnInit(): void {
    this.menu = this.menuService.pegarMenuPorPerfil(Perfil.ADMIN);
  }

  irPara(itens: Menu) {
    this.router.navigateByUrl(itens.rota);
  }

  changeOpen(event: boolean) {
    this.open = event;
  }
}
