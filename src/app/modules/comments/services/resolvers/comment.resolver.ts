import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import {CommentsDataService} from '../comments-data.service';
import {IComment_details} from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommentResolver implements Resolve<IComment_details> {

  constructor(private commentsDataService: CommentsDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment_details> | Promise<IComment_details> | IComment_details {
    const {id} = route.params;
    return this.commentsDataService.getById(+id);
  }
}
