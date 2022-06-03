import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {IMovies} from '../../interfaces';
import {MovieService} from '../movie.service';

@Injectable({
  providedIn: 'root'
})
export class MoviesResolver implements Resolve<IMovies> {

  constructor(private movieService: MovieService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovies> | Promise<IMovies> | IMovies {
    const {page} = route.params;
    return this.movieService.getAll(+page);
  }
}
