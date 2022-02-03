import { Component, OnInit, Output } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-botao-closed',
  templateUrl: './botao-closed.component.html',
  styleUrls: ['./botao-closed.component.scss'],
})
export class BotaoClosedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  botao: boolean = false;

  aoclicar() {
    this.botao = !this.botao;
  }
}
