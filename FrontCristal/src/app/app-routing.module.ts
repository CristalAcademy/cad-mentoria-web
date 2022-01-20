import { CadastroCandidatoComponent } from './componentes/cadastro/cadastro-candidato/cadastro-candidato.component';
import { EsqueciMinhaSenhaComponent } from './componentes/esqueci-minha-senha/esqueci-minha-senha.component';
import { HomeComponent } from './views/home/home.component';

import { LoginComponent } from './componentes/login/login.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { NgModule, Component } from '@angular/core';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
