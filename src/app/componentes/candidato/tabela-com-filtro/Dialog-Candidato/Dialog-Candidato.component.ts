import { ResponseCandidato } from './../../../../Model/ResponseCandidato';
import { Component, OnInit, Output, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-candidato',
  templateUrl: './Dialog-Candidato.component.html',
  styleUrls: ['./Dialog-Candidato.component.scss']
})
export class DialogCandidatoComponent implements OnInit {

  trabalha: boolean = false;
  estuda: boolean = false;
  programa: boolean = false;
  
  
  

  constructor(  public dialogRef: MatDialogRef<DialogCandidatoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ResponseCandidato) { }




  cancelar(): void {
    this.dialogRef.close();
  }
  ngOnInit() {
    this.trabalha = this.data.trabalha;
    this.estuda = this.data.estuda;
    this.programa = this.data.programou;
  }
  

}
