import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {IComment} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommentsDataService {
  private _url = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(this._url);
  }
}
