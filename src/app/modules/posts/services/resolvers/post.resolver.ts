import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import {IPost_details} from '../../interfaces';
import {PostsDataService} from '../posts-data.service';

@Injectable({
  providedIn: 'root'
})
export class PostResolver implements Resolve<IPost_details> {

  constructor(private postsDataService: PostsDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost_details> | Promise<IPost_details> | IPost_details {
    const {id} = route.params;
    return this.postsDataService.getById(+id);
  }
}
