import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  senha!: string;
  senhaErrada: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  verificarSenha() {
    this.senhaErrada = this.senha.length < 8;
  }
}
