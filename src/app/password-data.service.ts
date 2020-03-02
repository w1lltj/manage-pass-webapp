import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PasswordDataService {
  constructor(private _httpClient: HttpClient) {}

  onGetAllDatas(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    console.log('isAuth_token..... ', token, headers);

    return this._httpClient.get('http://localhost:3001/password-data/list', {headers: headers})
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('isAuth_err..... ', err);
          return throwError(err);
        })
      );
  }
}
