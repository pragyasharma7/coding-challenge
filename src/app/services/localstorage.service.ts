import { Injectable, Inject } from '@angular/core';

@Injectable()
export class LocalStorage {
    public list:string[] = new Array() ;

    constructor() { }
    setItem(key: string, value: string) {
        console.log(value)
            return localStorage.setItem(key,value);
        }

        getItem(key: string) {
            console.log(key)
                return localStorage.getItem(key)
            }
        
        clear() {
                return localStorage.clear()
            }
        
        removeItem(key) {
                return localStorage.removeItem(key)
            }
        
}