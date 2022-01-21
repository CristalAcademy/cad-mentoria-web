import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-candidatura',
  templateUrl: './status-candidatura.component.html',
  styleUrls: ['./status-candidatura.component.scss'],
})
export class StatusCandidaturaComponent implements OnInit {
  id!: number;
  title! : string;
  subtitle! : string;
  mensagem! : string;
  options! : string[];


  acao(opt: string) {
    if (opt == 'Sair') {
      this.router.navigateByUrl('/');
    } else if (opt == 'Continuar') {
      this.router.navigateByUrl('/candidato');
    } else if(opt=='Cancelar inscrição'){
      this.router.navigateByUrl('/cadastro');
    } else if(opt=='Ver cronograma'){
      
    }
  }

  constructor(private router: Router, private ac: ActivatedRoute) {}

  ngOnInit(): void {
    this.ac.params.subscribe((params) => {
      this.id = params['id'];
      switch (Number(this.id)) {
        case 0: {
          this.title = 'É isso ai';
          this.subtitle = 'Vamos entrar nessa juntos!';
          this.mensagem = 'Você foi aprovado e é muito bem-vindo à refinaria';
          this.options = ['Ver cronograma'];
          break;
        }
        case 1: {
          this.title = 'Calma lá';
          this.subtitle = 'Cadastro não finalizado';
          this.mensagem = 'Você parou no meio do cadastro, deseja continuar?';
          this.options = ['Sair', 'Continuar'];
          break;
        }
        case 2: {
          this.title = 'OPS...';
          this.subtitle = 'Desculpe a demora';
          this.mensagem = 'Ainda estamos avaliando seu perfil';
          this.options = ['Sair'];
          break;
        }
        case 3: {
          this.title = 'Ah não';
          this.subtitle = 'Não foi dessa vez';
          this.mensagem = 'Infelizmente seu perfil ainda não se adequa a refinaria';
          this.options = ['Cancelar inscrição'];
          break;
        }
      }
    });

  }
}
