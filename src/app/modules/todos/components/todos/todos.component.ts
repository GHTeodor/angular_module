import {Component, OnInit} from '@angular/core';

import {ITodo} from '../../interfaces/todo.interface';
import {TodosDataService} from '../../services/todos-data.service';

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
