import { Component } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  templateUrl: './error-msg.component.html',
  styleUrls: ['./error-msg.component.scss'],
})
export class ErrorMsgComponent {
  public titulo!: string;

  constructor() {}

  setError(titulo: string, tempo: number = 5000) {
    this.titulo = titulo;
    setTimeout(() => {
      this.titulo = '';
    }, tempo);
  }
}
