import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

import {ICar} from "../../interfaces";
import {CarService} from "../../services";

@Component({
  selector: 'app-car-update',
  templateUrl: './car-update.component.html',
  styleUrls: ['./car-update.component.css']
})
export class CarUpdateComponent implements OnInit {
  form: FormGroup;
  car: ICar;

  constructor(private carService:CarService, private activatedRoute: ActivatedRoute, private router: Router) {
    this._createForm();

    this.activatedRoute.params.subscribe(() =>
      this.car = this.router.getCurrentNavigation()?.extras?.state?.['data']);
  }

  ngOnInit(): void {
  }

  updateCar(id: number) {
    const rawValue = this.form.getRawValue();
    // this.carService.create(rawValue).subscribe(value =>
    //   this.cars.push(rawValue));
    this.carService.updateById(id, rawValue).subscribe(this.car = rawValue);
  }

  _createForm(): void {
    this.form = new FormGroup({
      model: new FormControl(null, [Validators.required, Validators.pattern("^[a-zа-яїієґ]+$"), Validators.minLength(1), Validators.maxLength(20)]),
      price: new FormControl(null, [Validators.required, Validators.min(0), Validators.max(1000000)]),
      year: new FormControl(null, [Validators.required, Validators.min(1990), Validators.max(new Date().getFullYear())])
    });
  }
}
