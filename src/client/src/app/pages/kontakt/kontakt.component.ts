import { Component, OnInit } from '@angular/core';
import { Title }  from '@angular/platform-browser';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-kontakt',
  templateUrl: './kontakt.component.html',
  styleUrls: ['./kontakt.component.scss']
})
export class KontaktComponent implements OnInit {

  constructor(private sharedService: SharedService, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Kontakt');
    this.sharedService.emitTitleChange('Kontakt');
  }

}
