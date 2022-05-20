import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ICar_details} from '../../interfaces';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent implements OnInit {
  car: ICar_details;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({carData}) =>
      this.car = carData);
  }
}
