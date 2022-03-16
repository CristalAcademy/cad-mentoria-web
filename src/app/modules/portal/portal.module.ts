import { BotaoMenuComponent } from 'src/app/componentes/teste-menu/botao-menu/botao-menu.component';
import { TesteMenuComponent } from './../../componentes/teste-menu/teste-menu.component';
import { HeaderComponent } from './../../componentes/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmComponent } from '../../views/adm/adm.component';
import { CandidatoComponent } from '../../componentes/candidato/candidato.component';
import { Material } from '../../../assets/module/material.module';
import { TabelaComFiltroComponent } from '../../componentes/candidato/tabela-com-filtro/tabela-com-filtro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlunoComponent } from '../../views/aluno/aluno.component';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalViewComponent } from '../../views/portal/portal-view/portal-view.component';
import { ShareModule } from '../share/share.module';
import {DialogCandidatoComponent} from "../../componentes/candidato/tabela-com-filtro/Dialog-Candidato/Dialog-Candidato.component";

@NgModule({
  declarations: [
    AdmComponent,
    CandidatoComponent,
    TabelaComFiltroComponent,
    AlunoComponent,
    PortalViewComponent,
    HeaderComponent,
    TesteMenuComponent,
    BotaoMenuComponent,
    DialogCandidatoComponent
  ],
  exports: [TesteMenuComponent, HeaderComponent, BotaoMenuComponent,],
  imports: [
    CommonModule,
    Material,
    FormsModule,
    ReactiveFormsModule,
    PortalRoutingModule,
    ShareModule,
  ],
})
export class PortalModule {}
