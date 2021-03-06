import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {DarkModeService} from '../../../../storageService';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  @Input()
  page: number;
  @Input()
  maxPage: number;
  @Input()
  results?: number;

  @Output()
  pageEmitter = new EventEmitter<number>();

  isDark: boolean;
  form: FormGroup;

  constructor(private darkModeService: DarkModeService) {
    this._createForm();
  }

  ngOnInit(): void {
    this.darkModeService.isDark.subscribe(value => {
      this.isDark = value;
    });
  }

  _createForm(): void {
    this.form = new FormGroup({
      page: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(500)]),
    });
  }

  changePage(): void {
    this.page = this.form.getRawValue().page;
    this.pageEmitter.emit(this.page);
    this.form.reset();
  }

  prevPage(): void {
    this.pageEmitter.emit(--this.page);
  }

  nextPage(): void {
    this.pageEmitter.emit(++this.page);
  }
}
