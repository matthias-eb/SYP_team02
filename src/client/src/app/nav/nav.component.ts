import { Component, OnInit} from '@angular/core';

import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public isCollapsed: boolean;
  private logopath = './assets/icon/DEC_logo.png';
  private navtitle: String;

  constructor(private titleService: Title) {
    this.isCollapsed = true;
  }

  ngOnInit() {}

  public updateTitle() {
    this.navtitle = this.titleService.getTitle();
  }

}
