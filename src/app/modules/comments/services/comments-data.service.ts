import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {IComment, IComment_details} from '../interfaces';
import {urls} from '../../../configs';

@Injectable({
  providedIn: 'root'
})
export class CommentsDataService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IComment[]> {
    return this.httpClient.get<IComment[]>(urls.comments).pipe(
      map(value => value),
      catchError(err=> throwError("Comments error", err))
    );
  }

  getById(id: number): Observable<IComment_details> {
    return this.httpClient.get<IComment_details>(`${urls.comments}/${id}`).pipe(
      map(value => value),
      catchError(err=> throwError("Comment error", err))
    );
  }
}
