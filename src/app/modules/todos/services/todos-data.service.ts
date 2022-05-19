import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ITodo} from '../interfaces/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodosDataService {
  private _url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ITodo[]> {
    return this.httpClient.get<ITodo[]>(this._url);
  }
}
