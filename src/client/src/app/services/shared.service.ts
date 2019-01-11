import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  // Session Handling cache
  // used if no web storage is supported.
  private userId: number;
  private userName: String;
  private token: String;

  // Observable string sources
  private emitTitleChangeSource = new Subject<String>();
  private emitUserIdChangeSource = new Subject<number>();
  private emitUserNameChangeSource = new Subject<String>();

  // Observable streams (for outside use)
  changedTitleEmitted$ = this.emitTitleChangeSource.asObservable();
  changedUserIdEmitted$ = this.emitUserIdChangeSource.asObservable();
  changedUserNameEmitted$ = this.emitUserNameChangeSource.asObservable();

  // Service message commands (income)
   /**
   * Saves change into observable object: changedTitleEmitted$
   * 
   * @param change string
   */
  emitTitleChange(change: string) {
    this.emitTitleChangeSource.next(change);
  }
  /**
   * Saves change into observable object: changedUserIdEmitted$
   * 
   * @param change string
   */
  emitUserIdChange(change: number){
    this.emitUserIdChangeSource.next(change);
  }
  /**
   * Saves change into observable object: changedUserNameEmitted$
   * 
   * @param change string
   */
  emitUserNameChange(change: string){
    this.emitUserNameChangeSource.next(change);
  }

  
  // Session Handling cache

  /**
   * Save User ID temporary.
   *
   * @param userId User ID
   */
  setUserIdFromCache(userId: number) {
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('userId', userId.toString());
    }
    this.userId = userId;
    this.emitUserIdChange(userId);
  }
  /**
   * Get temporary saved User ID.
   *
   * @return User ID
   */
  getUserIdFromCache(): number {
    if (typeof(Storage) !== 'undefined') {
      return Number(localStorage.getItem('userId'));
    }
    return this.userId;
  }

  /**
   * Save User name temporary.
   *
   * @param name User name
   */
  setUserNameFromCache(name: string) {
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('userName', name);
    }
    this.userName = name;
    this.emitUserNameChange(name);
  }
  /**
   * Get temporary saved User name.
   *
   * @return User name
   */
  getUserNameFromCache(): String {
    if (typeof(Storage) !== 'undefined') {
      return localStorage.getItem('userName');
    }
    return this.userName;
  }

  /**
   * Save User token temporary.
   *
   * @param token User token
   */
  setUserTokenFromCache(token: string) {
    if (typeof(Storage) !== 'undefined') {
      localStorage.setItem('token', token);
    }
    this.token = token;
  }
  /**
   * Get temporary User token.
   *
   * @return User token
   */
  getUserTokenFromCache(): String {
    if (typeof(Storage) !== 'undefined') {
      return localStorage.getItem('token');
    }
    return this.token;
  }

  /**
   * Get Authorization header.
   *
   * @return Authorization header
   */
  getAuthHeaderBase(): HttpHeaders {
    const authHeader = new HttpHeaders().set('Content-Type', 'application/json');
    const lsUserId = this.getUserIdFromCache();
    const lsToken = this.getUserTokenFromCache();
    if (lsUserId && lsToken) {
      authHeader.set('Authorization', `${lsUserId} ${lsToken}`);
    }
    return authHeader;
  }
}
