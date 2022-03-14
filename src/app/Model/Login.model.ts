export class LoginModel {
  private _email!: string;
  private _senha!: string;

  constructor(email: string, senha: string) {
    this._email = email;
    this._senha = senha;
  }

  get email(){
    return this._email;
  }

  get senha(){
    return this._senha;
  }
}
