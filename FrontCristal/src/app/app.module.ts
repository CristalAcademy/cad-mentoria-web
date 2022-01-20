import { CadastroCandidatoComponent } from './componentes/cadastro/cadastro-candidato/cadastro-candidato.component';
import { NgModule } from '@angular/core';
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
import { HttpClientModule } from '@angular/common/http';
import { SnackbarComponent } from './componentes/snackbar/snackbar.component';

import { HomeComponent } from './views/home/home.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    TooltipComponent,
    CadastroCandidatoComponent,
    CadastroCandidatoSocialComponent,
    StatusCandidaturaComponent,
    EsqueciMinhaSenhaComponent,
    SnackbarComponent,
    HomeComponent,
    FooterComponent,
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
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
