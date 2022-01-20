import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    public readonly email: String,
    public readonly senha: String) {

    }
}
