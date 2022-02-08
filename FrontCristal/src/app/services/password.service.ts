import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './../componentes/dialog/dialog.component';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordService {
  readonly apiURL: string = environment.path;
  constructor(private HttpClient: HttpClient,
    public dialog: MatDialog) {}

  forgotPass(email: string) {
    this.HttpClient.post<any>(`${this.apiURL}/recuperar-senha`, {
      email,
    }).subscribe();
  }

  attPass(senha: any, hash: any) {
    this.HttpClient.patch<any>(`${this.apiURL}/recuperar-senha/confirmar`, {
      hash,
      senha,
    }).subscribe(
      (res) => {
        this.dialog.open(DialogComponent);
      },
      (erro) => {
        alert('Encontramos erros: ' + erro.message);
      }
    );
  }
}
