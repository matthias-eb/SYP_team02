import { Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  private auth = false; //Fuer kommende Sessions
  public isCollapsed: boolean;
  private logopath = './assets/icon/DEC_logo.png';
  private navtitle: String;

  constructor(private sharedService: SharedService) {
    this.isCollapsed = true;
    sharedService.changeEmitted$.subscribe(newTitle => {
      this.navtitle=newTitle
    });
  }

  ngOnInit() {}

}