import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {IPost, IPost_details} from '../interfaces';
import {urls} from '../../../configs';

@Injectable({
  providedIn: 'root'
})
export class PostsDataService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IPost[]> {
    return this.httpClient.get<IPost[]>(urls.posts).pipe(
      map(value => value),
      catchError(err=> throwError("Posts error", err))
    );
  }

  getById(id: number): Observable<IPost_details> {
    return this.httpClient.get<IPost_details>(`${urls.posts}/${id}`).pipe(
      map(value => value),
      catchError(err=> throwError("Post error", err))
    );
  }
}
