import { FiltroCandidato } from './../Model/FiltroCandidato';
import { environment } from './../../environments/environment';
import { ResponseCandidato } from './../Model/ResponseCandidato.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CandidatoService {
  readonly apiURL: string = environment.path;

  constructor(private http: HttpClient) {}

  buscarListaInicial(): Observable<ResponseCandidato[]> {
    return this.http.get<ResponseCandidato[]>(
      `${this.apiURL}/candidatos?status=AGUARDANDO`
    );
  }
  // TO-DO
  buscarLista(filtro: FiltroCandidato): Observable<ResponseCandidato[]> {
    let params = new HttpParams();

    params = params.set('estuda', filtro.estudando);
    params = params.set('programou', filtro.programando);
    params = params.set('trabalha', filtro.trabalhando);

    return this.http.get<ResponseCandidato[]>(
      `${this.apiURL}/candidatos?`,{params}
    );
  }

  buscarCandidatoPorId(id: string): Observable<ResponseCandidato> {
    let params = new HttpParams();
    params = params.set('estuda', id);
    return this.http.get<ResponseCandidato>(`${this.apiURL}/candidatos/?`, { params });
  }
}
