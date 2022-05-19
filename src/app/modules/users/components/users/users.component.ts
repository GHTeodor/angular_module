import {Component, OnInit} from '@angular/core';

import {IUser} from '../../interfaces/user.interface';
import {UsersDataService} from '../../services/users-data.service';

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
