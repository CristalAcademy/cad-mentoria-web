import { ResponseLogin } from './../Model/ResponseLogin.model';
import { ProfileManagerService } from './profile-manager.service';
import { LoginModel } from './../Model/Login.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private profileManager: ProfileManagerService
  ) {
    this.apiURL = environment.path;
  }

  readonly apiURL!: string;

  logar(loginModel: LoginModel) {
    let user: any = {
      email: loginModel.email,
      senha: loginModel.senha,
    };

    console.log(user);

    user = JSON.stringify(user);

    this.http
      .post<ResponseLogin>(`${this.apiURL}/authenticate`, user)
      .subscribe((resultado) => {
        localStorage.setItem('login', JSON.stringify(resultado));
        let res: ResponseLogin = resultado;
        this.profileManager.handler(res.perfil);
      });
  }
}
