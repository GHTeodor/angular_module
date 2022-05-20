import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {IUser, IUser_details} from '../interfaces';
import {urls} from '../../../configs';

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users).pipe(
      map(value => value),
      catchError(err=> throwError("Users error", err))
    );
  }

  getById(id: number): Observable<IUser_details> {
    return this.httpClient.get<IUser_details>(`${urls.users}/${id}`).pipe(
      map(value => value),
      catchError(err=> throwError("User error", err))
    );
  }
}
