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

  /**
   * Get all ecars which match the description.
   *
   * @param filter filter and filter data
   *               { "<filter-id>": "<filter-data>" }
   *               {
   *                 "1": 1,                              // "1"  <-  manufacturer (filter)
   *                 "3": { "min": 60000, "max": 80000 }  // "3"  <-  price (filter)
   *               }
   *
   * @returns observable object of response with all matched ecars response or error
   *
   * @example
   *    getFilterAutos(filter).subscribe((res: any) => { ... });
   */
  getFilterAutos(filter: any): Observable<Object> {
    return this.http.post(ServerBaseUrl, {
      filter: filter
    });
  }
}
