import {Component, OnInit} from '@angular/core';

import {DarkModeService} from '../../storageService';

@Component({
  selector: 'app-dark-mode',
  templateUrl: './dark-mode.component.html',
  styleUrls: ['./dark-mode.component.css']
})
export class DarkModeComponent implements OnInit {
  isDark: boolean = false;

  constructor(public darkModeService: DarkModeService) {
  }

  ngOnInit(): void {
  }

  darkLight() {
    this.darkModeService.isDark.next(!this.isDark);
    this.isDark = !this.isDark;
  }
}
