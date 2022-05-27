import {AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, ViewChild} from '@angular/core';

import {IUser} from "./interfaces";
import {DataService} from "./services";
import {InnerComponent} from "./components/inner/inner.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck, OnDestroy, AfterViewChecked, AfterViewInit {
  user: IUser;

  @ViewChild(InnerComponent)
  inner: InnerComponent;

  constructor(private dataService: DataService) {
    dataService.storage.subscribe(value => console.log('storage', value));
  }

  catch(user: IUser) {
    console.log('app', user);
    this.user = user;
  }

  ngOnInit(): void {
    console.log('\x1b[34m ngOnInit!');
  }

  ngDoCheck(): void {
    console.log('\x1b[35m ngDoCheck!');
  }

  ngOnDestroy(): void {
    console.log('\x1b[31m ngOnDestroy!');
  }

  ngAfterViewChecked(): void {
    console.log(`\x1b[43m ${this.inner.checkInner}!`);
  }

  ngAfterViewInit(): void {
    console.log(`\x1b[43m ${this.inner.checkInner}!`);
  }
}
