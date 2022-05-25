import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {ICar} from "../../interfaces";
import {CarService} from "../../services";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  form: FormGroup;
  cars: ICar[];

  constructor(private carService: CarService) {
    this._createForm();
  }

  ngOnInit(): void {
    this.carService.getAll().subscribe(value => {
      console.log(value);
      this.cars = value;
    });
  }

  // carModel: {
  //     model: тільки букви мін 1 макс 20 символів,
  //     price: min 0 max 1000000,
  //     year: min 1990 max сьогоднішній рік
  //   }
  _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.required, Validators.pattern("^[a-zа-яїієґ]+$"), Validators.minLength(1), Validators.maxLength(20)]),
      price: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(1000000)]),
      year: new FormControl(null, [Validators.required, Validators.min(1990), Validators.max(new Date().getFullYear())])
    });
  }

  createCar(): void {
    const rawValue = this.form.getRawValue();
    this.carService.create(rawValue).subscribe(() =>
      this.cars.push(rawValue));
  }
}
