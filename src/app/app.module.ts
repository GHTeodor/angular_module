import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {CarsComponent} from './components/cars/cars.component';
import {HeaderComponent} from './components/header/header.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';
import {LayoutComponent} from './components/layout/layout.component';
import {AppRoutingModule} from "./app-routing.module";
import {MainInterceptor} from "./main.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      multi: true,
      useClass: MainInterceptor
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
