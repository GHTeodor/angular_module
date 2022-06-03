import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
  form: FormGroup;
  @Input()
  rating: number;
  @Input()
  votes: number;

  constructor(private fb: FormBuilder) {
    this._createForm();
  }

  ngOnInit(): void {
    this.form.setValue({rating: Math.round(this.rating / 2)});
  }

  _createForm(): void {
    this.form = this.fb.group({
      rating: ['', Validators.required],
    })
  }
}
