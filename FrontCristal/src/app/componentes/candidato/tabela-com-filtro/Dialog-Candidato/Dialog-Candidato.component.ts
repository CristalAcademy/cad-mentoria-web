import { ResponseCandidato } from './../../../../Model/ResponseCandidato';
import { Component, OnInit, Output, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-Dialog-Candidato',
  templateUrl: './Dialog-Candidato.component.html',
  styleUrls: ['./Dialog-Candidato.component.scss']
})
export class DialogCandidatoComponent implements OnInit {

  trabalha: boolean = false;

  constructor(  public dialogRef: MatDialogRef<DialogCandidatoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ResponseCandidato) { }



    

  cancelar(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.trabalha = this.data.trabalha;
  }

}
