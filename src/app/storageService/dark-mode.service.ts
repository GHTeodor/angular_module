import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  isDark = new BehaviorSubject<boolean>(false);

  constructor() {
  }
}
