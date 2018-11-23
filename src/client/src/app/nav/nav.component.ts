import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  private logopath = './assets/icon/DEC_logo.png';
  public isCollapsed:boolean;
  constructor() {
    this.isCollapsed=true;
   }

  ngOnInit() {
  }

}
