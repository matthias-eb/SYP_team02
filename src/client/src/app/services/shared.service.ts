import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }
  // Observable string sources
  //private emitTitleChangeSource = new Subject<any>();
  private emitTitleChangeSource = new Subject<string>();
  // Observable string streams
  changeEmitted$ = this.emitTitleChangeSource.asObservable();
  // Service message commands
  emitTitleChange(change: string) {
      this.emitTitleChangeSource.next(change);
  }
}
