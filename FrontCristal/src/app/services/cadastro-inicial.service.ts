import { HttpClient } from '@angular/common/http';
import { ResponseCandidato } from './../Model/ResponseCandidato.model';
import { Observable } from 'rxjs';
import { RequestCadastroInicial } from './../Model/ResquestCadastroInicial';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CadastroInicialService {
  apiURL: string;
  constructor(private http: HttpClient) {
    this.apiURL = environment.path;
  }

  cadastroInicial(
    request: RequestCadastroInicial
  ): Observable<ResponseCandidato> {
    return this.http.post<ResponseCandidato>(
      `${this.apiURL}/candidatos/step/user`,
      request
    );
  }
}
