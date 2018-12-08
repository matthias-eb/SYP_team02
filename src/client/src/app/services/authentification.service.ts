import { Injectable } from '@angular/core';
import { HttpClient, /*Headers*/ } from '@angular/common/http';
import { Observable } from 'rxjs';

const server = require('./../../../config.json');


/**
 * Authentification service for user login and register.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }

  /**
   * Log user in.
   *
   * @param name username
   * @param pwd password
   *
   * @returns observable object for login response or error
   *
   * @example
   *    login('Max', 'secret').subscribe((data: any) => { ... });
   */
  login(name: String, pwd: String): Observable<Object> {
    return this.http.post(server.ServerBaseUrl + '/login', {
      name: name,
      pwd: pwd
    });
  }

  /**
   * Register user.
   *
   * @param name unique username
   * @param email unique email
   * @param pwd password
   *
   * @returns observable object for register response or error
   *
   * @example
   *    login('Max', 'Max@mustermann.de', 'secret').subscribe((data: any) => { ... });
   */
  register(name: String, email: String, pwd: String): Observable<Object> {
    return this.http.post(server.ServerBaseUrl + '/register', {
      name: name,
      email: email,
      pwd: pwd
    });
  }

  /**
   * ONLY for testing. Not  avalible in production mode.
   * Remove user from database / Delete user account.
   * Attention: This will only remove the user from the user table.
   *            User data like "rating" will not be removed.
   *
   * @param id user id
   *
   * @returns observable object for login response or error
   *
   * @example
   *    login('Max', 'secret').subscribe((data: any) => { ... });
   */
  removeUser(id: number): Observable<Object> {
    return this.http.delete(server.ServerBaseUrl + '/TESTINGONLY/user/' + id);
  }


  /*appendAuthentificationHeader(headers: Headers) {
    // headers.append('Authorization', 'Bearer ' + btoa('username:password'));
  }*/

}
