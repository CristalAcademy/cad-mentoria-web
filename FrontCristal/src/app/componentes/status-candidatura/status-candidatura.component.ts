import { DialogCronogramaComponent } from './../dialog-cronograma/dialog-cronograma.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-status-candidatura',
  templateUrl: './status-candidatura.component.html',
  styleUrls: ['./status-candidatura.component.scss'],
})
export class StatusCandidaturaComponent implements OnInit {
  id!: number;
  title!: string;
  subtitle!: string;
  mensagem!: string;
  options!: string[];

  acao(opt: string) {
    switch (opt) {
      case 'Sair': {
        this.router.navigateByUrl('/');
        break;
      }
      case 'Continuar': {
        this.router.navigateByUrl('/candidato');
        break;
      }
      case 'Cancelar inscrição': {
        this.router.navigateByUrl('/cadastro');
        break;
      }
      case 'Ver cronograma': {
        this.dialog.open(DialogCronogramaComponent);
        break;
      }case 'Voltar': {
        this.router.navigateByUrl('/');
        break;
      }
    }
  }

  constructor(
    private router: Router,
    private ac: ActivatedRoute,
    public dialog: MatDialog
  ) {}

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
          this.mensagem =
            'Infelizmente seu perfil ainda não se adequa a refinaria';
          this.options = ['Cancelar inscrição'];
          break;
        }
        default: {
          this.title = 'Erro 404';
          this.subtitle = 'Não foi encontrado';
          this.mensagem =
            'Infelizmente não conseguimos seguir com sua solicitação, pois não entendemos onde gostaria de chegar';
          this.options = ['Voltar'];
          break;
       }
      }
    });
  }
}
