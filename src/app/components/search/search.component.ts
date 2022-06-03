import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

import {SearchStorageService} from '../../storageService/';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  form: FormGroup;

  constructor(private searchStorageService: SearchStorageService, private router: Router) {
    this._createForm();
  }

  ngOnInit(): void {
  }

  findMovie(): void {
    if (this.form.valid) {
      const {search} = this.form.getRawValue();
      this.searchStorageService.searchLineStorage.next(search);

      this.router.navigate(['search']);

      this.form.reset();
    }
  }

  _createForm(): void {
    this.form = new FormGroup({
      search: new FormControl(null, [Validators.required, Validators.maxLength(80)])
    });
  }
}
