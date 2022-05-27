import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { CustomPipe } from './services/pipes/custom.pipe';
import { InnerComponent } from './components/inner/inner.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    CustomPipe,
    InnerComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
