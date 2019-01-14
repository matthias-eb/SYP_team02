import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {Title} from '@angular/platform-browser';
import {AutoService} from '../../services/auto.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detailsansicht',
  templateUrl: './detailsansicht.component.html',
  styleUrls: ['./detailsansicht.component.scss']
})
export class DetailsansichtComponent implements OnInit {

  private show = false;
  private buttonName: any = 'Weitere Details anzeigen';
  private auto: Object;
  private currentRate;

  constructor(  private route: ActivatedRoute, private sharedService: SharedService, private titleService: Title, private autoService: AutoService) {
  }


  ngOnInit() {
    this.titleService.setTitle('Auto Detailsansicht');
    this.sharedService.emitTitleChange('Auto Detailsansicht');
   const id = +this.route.snapshot.paramMap.get('id');
    this.autoService.getFilterAutos({'id' : id }).subscribe((res: any) => {
      this.auto = res.data;
      console.log('auto', this.auto);
    });
    this.currentRate = 0;
  }

  /**
   * Function to toggle the  Weitere Details anzeigen/verbergen button.
   */
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show)
      this.buttonName = 'Weitere Details verbergen';
    else
      this.buttonName = 'Weitere Details anzeigen';
  }

}
