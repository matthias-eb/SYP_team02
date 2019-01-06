import { Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  private authUserId = 0; //Fuer kommende Sessions
  private authUserName: String;
  public isCollapsed: boolean;
  private logopath = './assets/icon/DEC_logo.png';
  private navtitle: String;

  constructor(private sharedService: SharedService) {
    this.isCollapsed = true;
    sharedService.changedTitleEmitted$.subscribe(   newTitle => {
      this.navtitle = newTitle;
    });
    sharedService.changedUserIdEmitted$.subscribe(    userId => {
      this.authUserId = userId;
      //this.authUserName = sharedService.getUserNameFromCache();
    });
    sharedService.changedUserNameEmitted$.subscribe(userName => {
      this.authUserName = userName;
    })
  }

  ngOnInit(){}

  onAusloggen(){
    this.sharedService.setUserIdFromCache(0);
    this.sharedService.setUserNameFromCache("Guest");
    this.sharedService.setUserTokenFromCache("");
    this.isCollapsed = true;
  }
}