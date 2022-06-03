import {Injectable} from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';

import {IYT_Videos} from '../../interfaces';
import {MovieService} from '../movie.service';

@Injectable({
  providedIn: 'root'
})
export class YouTubeResolver implements Resolve<IYT_Videos> {
  constructor(private movieService: MovieService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IYT_Videos> | Promise<IYT_Videos> | IYT_Videos {
    const {id} = route.params;
    return this.movieService.getYouTubeVideos(+id);
  }
}
