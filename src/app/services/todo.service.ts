import { Injectable, Inject } from '@angular/core';
import { LocalStorage } from './localstorage.service';
@Injectable()
export class ToDoService {
    constructor(private localStorage) { }

   save(todo){
    this.localStorage.setItem('list', todo);
    
   }
}