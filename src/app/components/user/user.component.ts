import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {IUser} from "../../interfaces";
import {DataService} from "../../services";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input()
  user: IUser;
  @Output()
  userEmitter = new EventEmitter<IUser>();

  details: IUser; //

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  emitt() {
    this.userEmitter.emit(this.user);

    this.details = this.user; //
  }

  saveToStorage() {
    this.dataService.storage.next(this.user);
  }
}

