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
  carForUpdate: ICar | null;
  randomCar: string[] = ['BMW', 'Citroen', 'Lexus', 'Mazda', 'Mercedes-Benz', 'Mitsubishi', 'Opel', 'Peugeot', 'Porsche', 'Renault', 'Rolls-Royce', 'Skoda', 'Suzuki', 'Tesla'];

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
      model: new FormControl('Tesla', [Validators.required, Validators.pattern("^[a-zA-Zа-яА-ЯїЇіІєЄґҐ]+$"), Validators.minLength(1), Validators.maxLength(20)]),
      price: new FormControl(0, [Validators.required, Validators.min(0), Validators.max(1000000)]),
      year: new FormControl(1990, [Validators.required, Validators.min(1990), Validators.max(new Date().getFullYear())])
    });
  }

  createCar(): void {
    const rawValue = this.form.getRawValue();
    if (!this.carForUpdate)
      this.carService.create(rawValue).subscribe(car =>
        this.cars.push(car));
    else
      this.carService.updateById(this.carForUpdate.id, rawValue).subscribe(value => {
        const updateCar = this.cars.find(car => car.id === this.carForUpdate?.id);
        Object.assign(updateCar, value);
        this.carForUpdate = null;
      });
    this.form.setValue({
      model: this.randomCar[Math.round(Math.random() * (this.randomCar.length - 1))],
      year: Math.round(Math.random() * (new Date().getFullYear() - 1990) + 1990),
      price: Math.round(Math.random() * 1000000)
    });
  }

  deleteCar(id: number): void {
    this.carService.deleteById(id).subscribe(() => {
      const index = this.cars.findIndex(car => car.id === id);
      this.cars.splice(index, 1);
    });
  }

  updateCar(car: ICar): void {
    this.carForUpdate = car;
    this.form.setValue({model: car.model, year: car.year, price: car.price});
  }
}
