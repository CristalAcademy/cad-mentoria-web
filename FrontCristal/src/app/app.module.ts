import { registerLocaleData } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import localePT from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Material } from '../assets/module/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtualizarSenhaComponent } from './componentes/atualizar-senha/atualizar-senha.component';
import { CadastroCandidatoSocialComponent } from './componentes/cadastro/cadastro-candidato-social/cadastro-candidato-social.component';
import { CadastroCandidatoComponent } from './componentes/cadastro/cadastro-candidato/cadastro-candidato.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { DialogCronogramaComponent } from './componentes/dialog-cronograma/dialog-cronograma.component';
import { EsqueciMinhaSenhaComponent } from './componentes/esqueci-minha-senha/esqueci-minha-senha.component';
import { LoginComponent } from './componentes/login/login.component';
import { SnackbarComponent } from './componentes/snackbar/snackbar.component';
import { StatusCandidaturaComponent } from './componentes/status-candidatura/status-candidatura.component';
import { TooltipComponent } from './componentes/tooltip/tooltip.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ShareModule } from './modules/share/share.module';
import { HomeComponent } from './views/home/home.component';
import { LoginViewComponent } from './views/login/login-view/login-view.component';
import { TesteMenuComponent } from './componentes/teste-menu/teste-menu.component';

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
    TesteMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Material,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ShareModule,
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
export class AppModule {}
