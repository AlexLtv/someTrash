import { Injectable } from '@angular/core';
import { TODOS } from '../TODOS';
import { ITodo } from '../models/todos.interface';
import { Http } from '@angular/http';
import { $ } from 'protractor';

@Injectable()
export class TodosService {
  constructor(
    private _http: Http
  ) { }

  getTodos() {
    return this._http.get('https://jsonplaceholder.typicode.com/todos').toPromise();
  }

  addTodo(newTodo: ITodo) {
    // return TODOS[TODOS.push(newTodo)];
    return this._http.post('https://jsonplaceholder.typicode.com/todos', newTodo).toPromise();
  }

  updateTodo(newTodo: ITodo) {
    // TODOS.map((todo, index) => {
    //   if (todo.id === newTodo.id) {
    //     TODOS[index] = newTodo;
    //     return TODOS[index];
    //   }
    // });
    // return;
    return this._http.put(`https://jsonplaceholder.typicode.com/todos/${newTodo.id}`, newTodo).toPromise();
  }
}
