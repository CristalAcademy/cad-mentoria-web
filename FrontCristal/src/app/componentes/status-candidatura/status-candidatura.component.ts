import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-candidatura',
  templateUrl: './status-candidatura.component.html',
  styleUrls: ['./status-candidatura.component.scss'],
})
export class StatusCandidaturaComponent implements OnInit {
  title = 'OPS';
  subtitle = 'Desculpe a demora';
  mensagem = 'Ainda estamos avaliando seu perfil';
  options = ['Sair', 'Continuar'];

  acao(opt: string) {
    if (opt == 'Sair') {
      this.router.navigateByUrl('/login')
    } else {
       '';
    }
  }

  constructor(private router: Router) {}

  ngOnInit(): void {}
}
