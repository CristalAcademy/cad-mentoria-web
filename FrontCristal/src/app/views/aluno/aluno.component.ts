import { Perfil } from 'src/app/Model/PerfilEnum';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.scss']
})
export class AlunoComponent implements OnInit {

  constructor() { }

  perfil: Perfil = Perfil.ALUNO;
  aluno!: string;
  ngOnInit(): void {
    this.aluno = 'Aluno';
  }

}
