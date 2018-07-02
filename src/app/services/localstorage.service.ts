import { Injectable, Inject } from '@angular/core';

@Injectable()
export class LocalStorage {
    constructor() { }
    setItem(key: string, value: string) {
        console.log(value)
            return localStorage.setItem(key,value);
        }
}