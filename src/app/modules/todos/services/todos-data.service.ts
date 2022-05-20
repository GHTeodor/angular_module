import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {ITodo, ITodo_details} from '../interfaces';
import {urls} from '../../../configs';

@Injectable({
  providedIn: 'root'
})
export class TodosDataService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>(urls.todos).pipe(
      map(value => value),
      catchError(err=> throwError("Todos error", err))
    );
  }

  getById(id: number): Observable<ITodo_details> {
    return this.httpClient.get<ITodo_details>(`${urls.todos}/${id}`).pipe(
      map(value => value),
      catchError(err => throwError("Todo error ", err))
    );
  }
}
