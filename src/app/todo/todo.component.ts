import { Component, OnInit } from '@angular/core';
import {ToDoService} from 'app/services/todo.service';
import { LocalStorage } from 'app/services/localstorage.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todo;
  constructor(private _localstorage:LocalStorage,
              private _todos: ToDoService) {

   }

  ngOnInit() {

  }
  addTodo(){
    console.log(this.todo);
    // this._todos.save(this.todo);
  }
}
