import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {ITodo} from '../../interfaces';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: ITodo[];

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({todosData}) =>
      this.todos = todosData);
  }
}
