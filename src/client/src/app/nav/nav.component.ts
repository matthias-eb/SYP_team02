import { Component, OnInit} from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  private logopath = './assets/icon/DEC_logo.png';
  public isCollapsed:boolean;
  private navtitle:String;

  constructor(private titleService: Title){
    this.isCollapsed=true;
  }
  
  ngOnInit() {}

  public updateTitle() {
    this.navtitle = this.titleService.getTitle();
  }
  
  
}
