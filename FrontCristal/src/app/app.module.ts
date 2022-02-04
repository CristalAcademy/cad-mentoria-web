import { AtualizarSenhaComponent } from './componentes/atualizar-senha/atualizar-senha.component';
import { CadastroCandidatoComponent } from './componentes/cadastro/cadastro-candidato/cadastro-candidato.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Material } from '../assets/module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { TooltipComponent } from './componentes/tooltip/tooltip.component';
import { CadastroCandidatoSocialComponent } from './componentes/cadastro/cadastro-candidato-social/cadastro-candidato-social.component';
import { StatusCandidaturaComponent } from './componentes/status-candidatura/status-candidatura.component';
import { EsqueciMinhaSenhaComponent } from './componentes/esqueci-minha-senha/esqueci-minha-senha.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SnackbarComponent } from './componentes/snackbar/snackbar.component';

import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { DialogCronogramaComponent } from './componentes/dialog-cronograma/dialog-cronograma.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { AdmComponent } from './views/adm/adm.component';
import { CandidatoComponent } from './componentes/candidato/candidato.component';

import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { TabelaComFiltroComponent } from './componentes/candidato/tabela-com-filtro/tabela-com-filtro.component';
import { BotaoClosedComponent } from './componentes/menu/botao-closed/botao-closed.component';
import { AlunoComponent } from './views/aluno/aluno.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AtualizarSenhaComponent,
    CadastroComponent,
    TooltipComponent,
    CadastroCandidatoComponent,
    CadastroCandidatoSocialComponent,
    StatusCandidaturaComponent,
    EsqueciMinhaSenhaComponent,
    SnackbarComponent,
    HomeComponent,
    FooterComponent,
    DialogCronogramaComponent,
    MenuComponent,
    AdmComponent,
    CandidatoComponent,
    TabelaComFiltroComponent,
    BotaoClosedComponent,
    AlunoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Material,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-br' },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule { }
