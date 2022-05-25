import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import {ICar} from "../../interfaces";
import {CarService} from "../../services";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input()
  car: ICar;

  constructor(private carService: CarService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

  }

  deleteCar(id: number) {
    this.carService.deleteById(id).subscribe(console.log);
  }
  navigateMe(car: ICar) {
    this.router.navigate([`${car.id}`], {relativeTo: this.activatedRoute, state: {data: car}});
  }
}
