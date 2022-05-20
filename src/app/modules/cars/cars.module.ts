import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {CarsRoutingModule} from './cars-routing.module';
import {CarResolver, CarsResolver, CarsDataService} from './services';
import {CarsComponent} from './components/cars/cars.component';
import {CarComponent} from './components/car/car.component';
import {CarDetailsComponent} from './components/car-details/car-details.component';
import {ActivatorGuard, DeactivatorGuard} from './guards';


@NgModule({
  declarations: [
    CarsComponent,
    CarComponent,
    CarDetailsComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    HttpClientModule
  ],
  providers: [
    CarsDataService,
    CarsResolver,
    CarResolver,
    ActivatorGuard,
    DeactivatorGuard
  ]
})
export class CarsModule {
}
