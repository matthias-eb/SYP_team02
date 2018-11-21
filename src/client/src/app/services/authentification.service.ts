import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

}
