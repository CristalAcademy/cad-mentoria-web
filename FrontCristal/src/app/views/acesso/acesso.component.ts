import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.scss'],
})
export class AcessoComponent implements OnInit {
  constructor() {}

  log = true;

  ngOnInit(): void {}

  cadastro() {
    this.log = false;
  }
  login() {
    this.log = true;
  }
}
