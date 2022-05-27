import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {UserService} from "../../services";
import {IUser} from "../../interfaces";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];
  @Output()
  userEmitter = new EventEmitter<IUser>();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value =>
      this.users = value);
  }

  catchUserEmitt(userCatch: IUser): void {
    console.log('users',userCatch);
    this.userEmitter.emit(userCatch);
  }
}
