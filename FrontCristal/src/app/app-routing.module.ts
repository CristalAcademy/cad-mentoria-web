import {AtualizarSenhaComponent} from './componentes/atualizar-senha/atualizar-senha.component';
import {CadastroCandidatoComponent} from './componentes/cadastro/cadastro-candidato/cadastro-candidato.component';
import {EsqueciMinhaSenhaComponent} from './componentes/esqueci-minha-senha/esqueci-minha-senha.component';
import {CadastroComponent} from './componentes/cadastro/cadastro.component';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CadastroCandidatoSocialComponent} from './componentes/cadastro/cadastro-candidato-social/cadastro-candidato-social.component';
import {LoginViewComponent} from "./views/login/login-view/login-view.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'portal',
    // TODO  canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/portal/portal.module').then((m) => m.PortalModule)
  },
  {
    path: 'login',
    component: LoginViewComponent,
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
    path: 'redefinir',
    component: AtualizarSenhaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
