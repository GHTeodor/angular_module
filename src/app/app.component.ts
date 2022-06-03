import {Component, OnInit} from '@angular/core';

import {DarkModeService} from './storageService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isDark: boolean;

  constructor(private darkModeService:DarkModeService) {
  }

  ngOnInit(): void {
    this.darkModeService.isDark.subscribe(value => {
      this.isDark = value;
    });
  }
}
