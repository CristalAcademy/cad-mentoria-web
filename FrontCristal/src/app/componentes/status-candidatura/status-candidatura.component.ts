import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-candidatura',
  templateUrl: './status-candidatura.component.html',
  styleUrls: ['./status-candidatura.component.scss']
})
export class StatusCandidaturaComponent implements OnInit {


  title = 'OPS';
  subtitle ='Desculpe a demora';
  mensagem='Ainda estamos avaliando seu perfil';
  options=['Sair', 'Continuar'];

  acao(opt:string){
    if(opt=='Sair') {
     return '';
    }else
    if(opt == 'Continuar') {
      return ''
    }else if(opt=='Cancelar inscrição'){
      return ''
    }
    return ''
  }

  constructor() {
   }

  ngOnInit(): void {
  }

}
