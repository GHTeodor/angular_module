import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

import {ICar, ICar_details} from '../interfaces';
import {urls} from '../../../configs';

@Injectable({
  providedIn: 'root'
})
export class CarsDataService {

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(urls.cars).pipe(
      map(value => value),
      catchError(err => throwError("Cars error", err))
    );
  }

  getById(id: number): Observable<ICar_details> {
    return this.httpClient.get<ICar_details>(`${urls.cars}/${id}`).pipe(
      map(value => value),
      catchError(err => throwError("Car error", err))
    );
  }
}
