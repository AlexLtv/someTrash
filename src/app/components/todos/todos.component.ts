import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ITodo } from '../../models/todos.interface';
import { TodosService } from '../../services/todos.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  providers: [TodosService]
})
export class TodosComponent implements OnInit {

  todos: ITodo[];

  // test = 'SOME TEXT';
  // newTodo = new FormGroup({
  //   title: new FormControl('', Validators.required)
  // });

  newTodo: ITodo = {
    title: '',
    completed: false,
    userId: 1
  };

  constructor(
    private todosService: TodosService
  ) { }

  ngOnInit() {
    this.todosService.getTodos()
      .then(res => {
        this.todos = res.json();
      });
  }

  onAddingTodo() {
    // const newTodo: ITodo = {
    //   title: this.newTodo.value.title,
    //   completed: false
    // };
    // this._sendNewTodo(newTodo);
    // this.newTodo.setValue({
    //   title: ''
    // });

    // this._showNewTodo(this.newTodo.value as ITodo);

    this._sendNewTodo(this.newTodo);
  }

  private _sendNewTodo(todo: ITodo) {
    const newTodo = { ...todo };
    this.todosService.addTodo(newTodo)
      .then(res => {
        const addedTodo: ITodo = res.json();
        this.todos.push(addedTodo);
        this.newTodo.title = '';
      });
  }




}
