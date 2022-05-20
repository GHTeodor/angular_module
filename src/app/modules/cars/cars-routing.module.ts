import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CarResolver, CarsResolver} from './services';
import {CarsComponent} from './components/cars/cars.component';
import {CarDetailsComponent} from './components/car-details/car-details.component';
import {ActivatorGuard, DeactivatorGuard} from './guards';

const routes: Routes = [
  {
    path: '', component: CarsComponent, resolve: {carsData: CarsResolver},
    canActivate:[ActivatorGuard],
    canDeactivate:[DeactivatorGuard],
    children: [{
      path: ':id', component: CarDetailsComponent, resolve: {carData: CarResolver}
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarsRoutingModule {
}
