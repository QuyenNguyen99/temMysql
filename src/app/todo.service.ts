import { Http } from '@angular/http';
import { Injectable, getDebugNode } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
@Injectable()
export class TodoService {
    constructor(private http: Http) { }

    getAll() {
        return this.http.get('http://localhost:3000/').map((res) => {
            console.log(res);
            return res.json();
        });
    // getOne()
    }
}