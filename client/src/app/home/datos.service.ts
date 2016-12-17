import { UserModel, User } from './datos.model';
import { Injectable } from '@angular/core';
// Import library http
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

/**
 * React development with Observables
 */

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DatosService {

  private urlBase: string = 'http://localhost/angular2-slimphp/backend'
  // comunicación de eventos mediante observables
  private users: UserModel[] = [];

  constructor(private http: Http) { }

  getUsers(): Observable<UserModel[]> {
    return this.http
      .get(`${this.urlBase}/users`)
      .map( response => response.json())
      .map(users => this.users = users);
  }

}
