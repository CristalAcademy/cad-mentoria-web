import { RequestCadastroSocial } from './../Model/RequestCadastroSocial';
import { ResponseCandidato } from '../Model/ResponseCandidato';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'

})
export class CadastroSocialService{
    apiURL: string;
    constructor(private http: HttpClient){
        this.apiURL = environment.path;
    }
    cadastroSocial(
        request: RequestCadastroSocial):Observable<ResponseCandidato>{4
            return this.http.post<ResponseCandidato>(
                `${this.apiURL}/candidatos/step/social`, request
            );

        }
}