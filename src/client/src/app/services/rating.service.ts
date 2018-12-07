import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const server = require('./../../../config.json');
const ServerBaseUrl = server.ServerBaseUrl + '/rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http: HttpClient) { }

  /**
   * Get all user ratings.
   *
   * @param id user id
   *
   * @returns observable object for rating response or error
   *
   * @example
   *    getUserRating(id).subscribe((res: any) => { ... });
   */
  getUserRating(id: number): Observable<Object> {
    return this.http.get(ServerBaseUrl + '/user', {
      params: new HttpParams().append('id', String(id))
    });
  }

  /**
   * Get all ecar ratings.
   *
   * @param id ecar id
   *
   * @returns observable object for rating response or error
   *
   * @example
   *    getAutoRating(id).subscribe((res: any) => { ... });
   */
  getAutoRating(id: number): Observable<Object> {
    return this.http.get(ServerBaseUrl + '/auto', {
      params: new HttpParams().append('id', String(id))
    });
  }

  /**
   * Set rating for a ecar from by a specific user.
   *
   * @param userId user id
   * @param autoId ecar id
   * @param rating user rating for ecar (Star-System 1-5)
   *
   * @returns observable object for rating response or error
   *
   * @example
   *    setAutoRation(userId, autoId).subscribe((res: any) => { ... });
   */
  setAutoRation(userId: number, autoId: number, rating: number): Observable<Object> {
    return this.http.post(ServerBaseUrl + '/auto', {
      userId: userId,
      autoId: autoId,
      rating: rating
    });
  }
}
