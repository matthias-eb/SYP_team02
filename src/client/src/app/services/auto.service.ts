import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const server = require('./../../../config.json');
const ServerBaseUrl = server.ServerBaseUrl + '/auto';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

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
  getFilter(): Observable<Object> {
    return this.http.post(ServerBaseUrl + '/filter', { });
  }
}
