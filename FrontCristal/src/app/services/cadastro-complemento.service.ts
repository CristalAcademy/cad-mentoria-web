import { ResponseCandidato } from './../Model/ResponseCandidato.model';
import { Observable } from 'rxjs';
import { RequestCadastroComplemento } from './../Model/ResquestCadastroComplemento';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CadastroComplementoService {
  apiURL: string;
  constructor(private http: HttpClient) {
    this.apiURL = environment.path;
  }
  cadastroComplemento(
    request: RequestCadastroComplemento
  ): Observable<ResponseCandidato> {
    return this.http.post<ResponseCandidato>(
      `${this.apiURL}/candidatos/step/complemento`,
      request
    );
  }
}
