import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {IMovies} from '../interfaces';
import {urls} from '../../../configs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number): Observable<IMovies> {
    return this.httpClient.get<IMovies>(`${urls.movies}&page=${page}`).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }
}
