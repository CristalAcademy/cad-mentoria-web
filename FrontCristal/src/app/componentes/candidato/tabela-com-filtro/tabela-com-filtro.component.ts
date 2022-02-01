import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabela-com-filtro',
  templateUrl: './tabela-com-filtro.component.html',
  styleUrls: ['./tabela-com-filtro.component.scss']
})
export class TabelaComFiltroComponent implements OnInit {
  displayedColumns: string[] = ['name','acao'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


}
export interface PeriodicElement {
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Ana' },
  { name: 'Carla' },
  { name: 'Daniel' },
  { name: 'Julio' },
  { name: 'Nilton' },
  { name: 'Omar' },
  { name: 'Renata' },
  { name: 'Tania' },
  { name: 'Tavares' },
  { name: 'Vania' },
];
