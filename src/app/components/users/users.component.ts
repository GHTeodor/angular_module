import {Component, OnInit} from '@angular/core';

import {UsersDataService} from '../../services';
import {IUser} from '../../interfaces';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private usersService: UsersDataService) {
  }

  ngOnInit(): void {
    this.usersService.getAll().subscribe(value =>
      this.users = value);
  }
}
