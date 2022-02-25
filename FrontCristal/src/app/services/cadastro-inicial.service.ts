import { HttpClient } from '@angular/common/http';
import { ResponseCandidato } from '../Model/ResponseCandidato';
import { Observable } from 'rxjs';
import { RequestCadastroInicial } from './../Model/ResquestCadastroInicial';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CadastroInicialService {
  readonly api = environment.path;

  constructor(private http: HttpClient) { } 

  cadastrar(data: string ){
    return this.http.post<ResponseCadastroIncial[]>(`${this.api}/candidatos/step/user`, data)
    
  }
}
