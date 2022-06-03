import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {MovieService} from '../movie.service';
import {IImages} from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ImagesResolver implements Resolve<IImages> {
  constructor(private movieService: MovieService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IImages> | Promise<IImages> | IImages {
    const {id} = route.params;
    return this.movieService.getImages(+id);
  }
}
