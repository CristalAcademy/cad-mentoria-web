import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {StatusCandidaturaComponent} from "../../componentes/status-candidatura/status-candidatura.component";
import {AdmComponent} from "../../views/adm/adm.component";
import {AlunoComponent} from "../../views/aluno/aluno.component";
import {PortalViewComponent} from "../../views/portal/portal-view/portal-view.component";


const routes: Routes = [
  {
    path: '',
    component: PortalViewComponent,
    children: [
      {
        path: 'status/:id',
        component: StatusCandidaturaComponent,
      },
      {
        path: 'admin/candidato',
        component: AdmComponent
      },
      {
        path: 'admin/home',
        component: AdmComponent
      },
      {
        path: 'aluno/home',
        component: AlunoComponent
      }
      // { path: 'home', component: HomeComponent },
      // { path: '', redirectTo: '/portal/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortalRoutingModule {
}
