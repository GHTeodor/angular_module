import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import {ITodo_details} from '../../interfaces';
import {TodosDataService} from '../todos-data.service';

@Injectable({
  providedIn: 'root'
})
export class TodoResolver implements Resolve<ITodo_details> {

  constructor(private todosDataService:TodosDataService) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITodo_details> | Promise<ITodo_details> | ITodo_details {
    const {id} = route.params;
    return this.todosDataService.getById(+id);
  }
}
