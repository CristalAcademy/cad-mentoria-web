import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdmComponent} from "../../views/adm/adm.component";
import {MenuComponent} from "../../componentes/menu/menu.component";
import {CandidatoComponent} from "../../componentes/candidato/candidato.component";
import {BotaoClosedComponent} from "../../componentes/menu/botao-closed/botao-closed.component";
import {Material} from "../../../assets/module/material.module";
import {TabelaComFiltroComponent} from "../../componentes/candidato/tabela-com-filtro/tabela-com-filtro.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AlunoComponent} from "../../views/aluno/aluno.component";
import {PortalRoutingModule} from "./portal-routing.module";
import {PortalViewComponent} from "../../views/portal/portal-view/portal-view.component";
import {ShareModule} from "../share/share.module";


@NgModule({
  declarations: [
    AdmComponent,
    MenuComponent,
    CandidatoComponent,
    BotaoClosedComponent,
    TabelaComFiltroComponent,
    AlunoComponent,
    PortalViewComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    Material,
    FormsModule,
    ReactiveFormsModule,
    PortalRoutingModule,
    ShareModule
  ]
})
export class PortalModule { }
