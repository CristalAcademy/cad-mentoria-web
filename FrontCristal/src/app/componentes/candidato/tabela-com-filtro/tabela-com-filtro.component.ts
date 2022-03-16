import { MatDialog } from '@angular/material/dialog';
import { FiltroCandidato } from './../../../Model/FiltroCandidato';
import { ResponseCandidato } from '../../../Model/ResponseCandidato';

import { CandidatoService } from './../../../services/candidato.service';
import { Component, ElementRef, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DialogCandidatoComponent } from './Dialog-Candidato/Dialog-Candidato.component';

@Component({
  selector: 'app-tabela-com-filtro',
  templateUrl: './tabela-com-filtro.component.html',
  styleUrls: ['./tabela-com-filtro.component.scss'],
})
export class TabelaComFiltroComponent implements OnInit {
  displayedColumns: string[] = ['name', 'view', 'acao'];

  data!: Array<ResponseCandidato>;
  dataSource!: MatTableDataSource<ResponseCandidato>;

  filtros!: FormGroup;

  constructor(private candidatoService: CandidatoService, fb: FormBuilder, public dialog: MatDialog) {
    this.filtros = fb.group({
      estudando: false,
      programando: false,
      trabalhando: false,
    });
  }
  openDialog( element: ResponseCandidato): void {
    const dialogref =this.dialog.open(DialogCandidatoComponent,
      {
        data: element
      })

  
  dialogref.afterClosed().subscribe(result  => {
    console.log('o dialogo fechou')
  })

  }

  ngOnInit(): void {
    this.candidatoService.buscarListaInicial().subscribe((res) => {
      this.data = res;
      this.dataSource = new MatTableDataSource(this.data);
    });
  }
  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  aoMudar() {
    let filtro = new FiltroCandidato(
      this.filtros.controls['estudando'].value,
      this.filtros.controls['programando'].value,
      this.filtros.controls['trabalhando'].value
    );
    this.candidatoService.buscarLista(filtro).subscribe((res) => {
      this.data = res;
      this.dataSource = new MatTableDataSource(this.data);
    });
  }
}
