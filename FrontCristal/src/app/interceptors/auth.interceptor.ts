import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    var token: {
      token: string;
      email: string;
    } = JSON.parse(localStorage.getItem('login') ||'');


    if (req.url != `${environment.path}/authenticate`) {
      req = req.clone({
        setHeaders: {
          'Authorization': `Bearer ${token.token}`,
        },
      });
    }

    req = req.clone({
      setHeaders: {
        'Content-Type' : 'application/json; charset=utf-8',
        'Accept'       : 'application/json',
      },
    });

    return next.handle(req);
  }
}
