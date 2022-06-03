import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {IMovie} from '../../interfaces';
import {MovieService} from '../movie.service';

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<IMovie> {
  constructor(private movieService: MovieService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IMovie> | Promise<IMovie> | IMovie {
    const {id} = route.params;
    return this.movieService.getById(+id);
  }
}
