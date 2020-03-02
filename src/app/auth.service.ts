import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {UserCredential} from './user-credential.model';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private _httpClient: HttpClient) {}

  onRegister(userCredential: UserCredential): Observable<any> {
    return this._httpClient.post('http://localhost:3001/auth/signup', userCredential)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('onRegister_err..... ', err);
          return throwError(err);
        })
      );
  }

  onSignIn(userCredential: UserCredential): Observable<any> {
    return this._httpClient.post('http://localhost:3001/auth/signin', userCredential)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('onSignIn_err..... ', err);
          return throwError(err);
        })
      );
  }

  isAuth(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    console.log('isAuth_token..... ', token);

    return this._httpClient.get('http://localhost:3001/isauth', {headers: headers})
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('isAuth_err..... ', err);
          return throwError(err);
        })
      );
  }

}
