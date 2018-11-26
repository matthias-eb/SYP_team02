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
   * Get all Filter.
   *
   * @returns observable object for filter response or error
   *
   * @example
   *    getFilter().subscribe((res: any) => { ... });
   */
  getFilter(): Observable<Object> {
    return this.http.get(ServerBaseUrl + '/filter', { });
  }

  /**
   * Get only main filters for main page.
   *
   * @returns observable object for main filter response or error
   *
   * @example
   *    getMainFilter().subscribe((res: any) => { ... });
   */
  getMainFilter(): Observable<Object> {
    return this.http.get(ServerBaseUrl + '/mainfilter', { });
  }
}
