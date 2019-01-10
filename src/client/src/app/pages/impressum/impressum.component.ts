import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-impressum',
  templateUrl: './impressum.component.html',
  styleUrls: ['./impressum.component.scss']
})
export class ImpressumComponent implements OnInit {
  private standDatum = "01.01.2019";
  constructor(private sharedService: SharedService, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Impressum');
    this.sharedService.emitTitleChange('Impressum');
  }

}
