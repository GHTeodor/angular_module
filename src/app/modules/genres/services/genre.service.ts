import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {IGenres, IMoviesByGenre} from '../interfaces';
import {urls} from '../../../configs';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<IGenres> {
    return this.httpClient.get<IGenres>(urls.genres).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }

  getByGenre(genre_id: number, page: number): Observable<IMoviesByGenre> {
    return this.httpClient.get<IMoviesByGenre>(`${urls.movies}&with_genres=${genre_id}&page=${page}`);
  }
}
