import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  //TO-DO WIP
  @Input()
  perfil! : string;

  constructor() { }

  ngOnInit(): void {
  }

}
