import {Component, OnInit} from '@angular/core';

import {TodosDataService} from '../../services';
import {ITodo} from '../../interfaces';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: ITodo[];

  constructor(private todosService: TodosDataService) {
  }

  ngOnInit(): void {
    this.todosService.getAll().subscribe(value =>
      this.todos = value);
  }
}
