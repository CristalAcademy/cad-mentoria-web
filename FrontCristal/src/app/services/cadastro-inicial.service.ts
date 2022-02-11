import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseCadastroIncial } from './Model/ResponseCadastroInicial';

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
