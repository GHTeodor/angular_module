import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {IGenres} from '../../interfaces';
import {GenreService} from '../genre.service';

@Injectable({
  providedIn: 'root'
})
export class GenresResolver implements Resolve<IGenres> {

  constructor(private genreService: GenreService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IGenres> | Promise<IGenres> | IGenres {
    return this.genreService.getAll();
  }
}
