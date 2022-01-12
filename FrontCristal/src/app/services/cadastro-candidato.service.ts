import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CadastroCandidatoService {
  constructor(
    public readonly nome: String,
    public readonly email: String,
    public readonly senha: String,
    public readonly confirmaSenha: String
  ) {}
}
