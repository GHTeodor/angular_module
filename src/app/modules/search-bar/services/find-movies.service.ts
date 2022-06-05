import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {urls} from '../../../configs';
import {IFoundMovies} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class FindMoviesService {
  constructor(private httpClient: HttpClient) {
  }

  getAll(page: number, query: string | null): Observable<IFoundMovies> {
    return this.httpClient.get<IFoundMovies>(`${urls.query}${query}&page=${page}`);
  }
}
