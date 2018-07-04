import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'app/services/localstorage.service';
import * as _ from 'lodash';
declare const $: any;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  public todo: string;
  public list: any;
  public arr;
  public check;
  audio: HTMLAudioElement; //for including audios
  constructor(private _localstorage: LocalStorage,
  ) {

  }

  ngOnInit() {
    this.list_initialize();
    $('#myModal').modal('show'); // to open introduction modal
  }
  addTodo() {                   // this will add task into local storage
    if (this.todo) {
      if (this.arr) {
        this.list = this.arr;
        this.list.push(this.todo)
      } else {
        this.list_initialize();
        this.list.push(this.todo)
      }

      this._localstorage.setItem('list', JSON.stringify(this.list))
      this.todo = '';                       // to reset the task's value after its been added in the list

    }
  }
  sortAtoZ() {
    this.list = _.sortBy(this.list);              // sort the list from A to Z
  }
  clearList() {
    this.arr = this._localstorage.clear();        // clear the list 
    this.list = this.arr;
    this.playdClearAudio();                       // play audio when list has been cleared
  }

  checkbox(event, n) {
    if (event.target.checked) {
      const index: number = this.list.indexOf(n);

      this.list.splice(index, 1);
      this.playdeleteAudio();                         // play audio when task is deleted
      this._localstorage.setItem('list', JSON.stringify(this.list))
    }
  }
  list_initialize() {
    this.arr = JSON.parse(this._localstorage.getItem('list'));
    this.list = this.arr;
    if (this.arr == null) {
      this.list = [];
    }
  }
  playdeleteAudio() {
    this.audio = new Audio();
    this.audio.src = "assets/sound/to-the-point.ogg";
    this.audio.load();
    this.audio.play();
  }
  playdClearAudio() {
    this.audio = new Audio();
    this.audio.src = "assets/sound/trash.wav";
    this.audio.load();
    this.audio.play();
  }
}
