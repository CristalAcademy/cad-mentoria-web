import {AtualizarSenhaComponent} from './componentes/atualizar-senha/atualizar-senha.component';
import {CadastroCandidatoComponent} from './componentes/cadastro/cadastro-candidato/cadastro-candidato.component';
import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Material} from '../assets/module/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './componentes/login/login.component';
import {CadastroComponent} from './componentes/cadastro/cadastro.component';
import {TooltipComponent} from './componentes/tooltip/tooltip.component';
import {CadastroCandidatoSocialComponent} from './componentes/cadastro/cadastro-candidato-social/cadastro-candidato-social.component';
import {StatusCandidaturaComponent} from './componentes/status-candidatura/status-candidatura.component';
import {EsqueciMinhaSenhaComponent} from './componentes/esqueci-minha-senha/esqueci-minha-senha.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {SnackbarComponent} from './componentes/snackbar/snackbar.component';

import {HomeComponent} from './views/home/home.component';
import {DialogCronogramaComponent} from './componentes/dialog-cronograma/dialog-cronograma.component';

import {registerLocaleData} from '@angular/common';
import localePT from '@angular/common/locales/pt';
import {AuthInterceptor} from './interceptors/auth.interceptor';
import {LoginViewComponent} from './views/login/login-view/login-view.component';
import {ShareModule} from "./modules/share/share.module";

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
    DialogCronogramaComponent,
    LoginViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Material,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ShareModule
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
