import { AdmComponent } from './views/adm/adm.component';
import { AtualizarSenhaComponent } from './componentes/atualizar-senha/atualizar-senha.component';
import { StatusCandidaturaComponent } from './componentes/status-candidatura/status-candidatura.component';
import { CadastroCandidatoComponent } from './componentes/cadastro/cadastro-candidato/cadastro-candidato.component';
import { EsqueciMinhaSenhaComponent } from './componentes/esqueci-minha-senha/esqueci-minha-senha.component';
import { HomeComponent } from './views/home/home.component';

import { LoginComponent } from './componentes/login/login.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroCandidatoSocialComponent } from './componentes/cadastro/cadastro-candidato-social/cadastro-candidato-social.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cadastro',
    component: CadastroComponent,
  },
  {
    path: 'esqueci-minha-senha',
    component: EsqueciMinhaSenhaComponent,
  },
  {
    path: 'candidato',
    component: CadastroCandidatoComponent,
  },
  {
    path: 'social',
    component: CadastroCandidatoSocialComponent,
  },
  {
    path: 'status/:id',
    component: StatusCandidaturaComponent,
  },{
    path: 'redefinir',
    component: AtualizarSenhaComponent
  },{
    path: 'menu/adm',
    component: AdmComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
