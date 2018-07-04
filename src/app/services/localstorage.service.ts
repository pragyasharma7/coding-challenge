import { Injectable, Inject } from '@angular/core';

@Injectable()
export class LocalStorage {
    public list:string[] = new Array() ;

    constructor() { 
        
    }
    setItem(key: string, value: string) {
            return localStorage.setItem(key,value);
        }

        getItem(key: string) {
                return localStorage.getItem(key)
            }
        
        clear() {
                return localStorage.clear()
            }
        
}