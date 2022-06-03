import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchStorageService {

  searchLineStorage = new BehaviorSubject<(string | null)>(null);

  constructor() {
  }
}
