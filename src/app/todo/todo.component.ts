import { Component, OnInit } from '@angular/core';
import {ToDoService} from 'app/services/todo.service';
import { LocalStorage } from 'app/services/localstorage.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todo:string;
  public arr :string;
  public list:string[] ;
   public a = this._localstorage.getItem('list');
  constructor(private _localstorage:LocalStorage,
              private _todos: ToDoService) {
              
   }

  ngOnInit() {
    this.list=this._localstorage.list;
    this.list.push(this.a)
  }
  addTodo(){
   // this.arr = new Array("Mary","Tom","Jack","Jill") ;
      this.list.push(this.todo);
      console.log(this.list, this.todo)
   // this.arr.push(this.todo);
this._localstorage.setItem('list', JSON.stringify(this.list))
this.todo='';
  }
  ngDoCheck(){
  
     console.log(this.a)
  }
}
