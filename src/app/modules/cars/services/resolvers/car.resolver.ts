import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';

import {CarsDataService} from '../cars-data.service';
import {ICar} from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class CarResolver implements Resolve<ICar> {

  constructor(private carsDataSer: CarsDataService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ICar> | Promise<ICar> | ICar {
    const {id} = route.params;
    return this.carsDataSer.getById(+id);
  }
}
