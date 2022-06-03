import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {IImages, IMovie, IYT_Videos} from '../interfaces';
import {urls} from '../../../configs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private httpClient: HttpClient) {
  }

  getById(id: number): Observable<IMovie> {
    return this.httpClient.get<IMovie>(urls.movie(id)).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }

  getImages(id: number): Observable<IImages> {
    return this.httpClient.get<IImages>(urls.images(id)).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }

  getYouTubeVideos(id: number): Observable<IYT_Videos> {
    return this.httpClient.get<IYT_Videos>(urls.videos(id)).pipe(
      map(value => value),
      catchError(err => throwError(err))
    );
  }
}
