import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {PasswordData} from './password-data.model';


@Injectable({
  providedIn: 'root'
})
export class PasswordDataService {
  constructor(private _httpClient: HttpClient) {}

  onGetAllDatas(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this._httpClient.get('http://localhost:3001/password-data/list', {headers: headers})
      .pipe(
        map(
          (res: any) => res.passwordDatas
        ),
        catchError((err: HttpErrorResponse) => {
          console.log('getAllDatas_err..... ', err);
          return throwError(err);
        })
      );
  }

  onAddData(passwordData: PasswordData): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this._httpClient.post('http://localhost:3001/password-data/add', passwordData, {headers: headers})
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('addData_err..... ', err);
          return throwError(err);
        })
      );
  }

  onDeleteData(id: string): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this._httpClient.post('http://localhost:3001/password-data/delete', {_id: id}, {headers: headers})
      .pipe(
        catchError( (err: HttpErrorResponse) => {
          console.log('deleteData_err..... ', err);
          return throwError(err);
        })
      );
  }

  onUpdateData(passwordData: any): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    return this._httpClient.post('http://localhost:3001/password-data/update', passwordData, {headers: headers})
      .pipe(
        catchError((err: HttpErrorResponse) => {
          console.log('updateData_err..... ', err);
          return throwError(err);
        })
      );
  }
}
