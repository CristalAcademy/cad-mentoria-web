export class RequestCadastroInicial {
  constructor(email: string, nomeCompleto: string, senha: string) {
    this.email = email;
    this.nomeCompleto = nomeCompleto;
    this.senha = senha;
  }
  email!: string;
  nomeCompleto!: string;
  senha!: string;
}
