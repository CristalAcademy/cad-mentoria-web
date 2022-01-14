import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Material } from '../assets/module/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { AcessoComponent } from './views/acesso/acesso.component';
import { TooltipComponent } from './componentes/tooltip/tooltip.component';
import { CadastroComplementarComponent } from './componentes/cadastro/cadastro-candidato/cadastro-candidato.component';
import { CadastroCandidatoSocialComponent } from './componentes/cadastro/cadastro-candidato-social/cadastro-candidato-social.component';
import { StatusCandidaturaComponent } from './componentes/status-candidatura/status-candidatura.component';
import { EsqueciMinhaSenhaComponent } from './componentes/login/esqueci-minha-senha/esqueci-minha-senha.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    AcessoComponent,
    TooltipComponent,
    CadastroComplementarComponent,
    CadastroCandidatoSocialComponent,
    StatusCandidaturaComponent,
    EsqueciMinhaSenhaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Material,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: []
})
export class AppModule {}
