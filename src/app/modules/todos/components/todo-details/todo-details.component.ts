import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ITodo_details} from '../../interfaces';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  todo: ITodo_details;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({todoData}) =>
      this.todo = todoData);
  }
}
