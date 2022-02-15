import { Observable } from 'rxjs';
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
    this.login(loginModel).subscribe((resultado) => {
      localStorage.setItem('login', JSON.stringify(resultado));
      let res: ResponseLogin = resultado;
      this.profileManager.handler(res.perfil);
    });
  }

  login(loginModel: LoginModel): Observable<ResponseLogin> {
    let user = {
      email: loginModel.email,
      senha: loginModel.senha,
    };

    return this.http.post<ResponseLogin>(`${this.apiURL}/authenticate`, user);
  }
}
