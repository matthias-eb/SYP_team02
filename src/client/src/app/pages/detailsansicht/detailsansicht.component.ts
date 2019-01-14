import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {Title} from '@angular/platform-browser';
import {AutoService} from '../../services/auto.service';

@Component({
  selector: 'app-detailsansicht',
  templateUrl: './detailsansicht.component.html',
  styleUrls: ['./detailsansicht.component.scss']
})
export class DetailsansichtComponent implements OnInit {

  private show = false;
  private buttonName: any = 'Weitere Details anzeigen';
  private auto: Object;

  constructor(private sharedService: SharedService, private titleService: Title, private autoService: AutoService) {
  }


  ngOnInit() {
    this.autoService.getBestAutos(6).subscribe((res: any) => {
      this.auto = res.data;
      console.log('auto', this.auto);
    });
  }

  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show)
      this.buttonName = 'Weitere Details verbergen';
    else
      this.buttonName = 'Weitere Details anzeigen';
  }

}
