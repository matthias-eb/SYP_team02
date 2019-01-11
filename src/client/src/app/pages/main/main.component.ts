import {Component, OnInit} from '@angular/core';
import {AutoService} from '../../services/auto.service';
import {SharedService} from '../../services/shared.service';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit {
  private filters: Object;
  private userFilter: Object;
  private filteredAutos: Object;
  private carouselAutos: Object;


  constructor(private sharedService: SharedService, private titleService: Title, private autoService: AutoService) {
    this.userFilter = { };
  }

  ngOnInit() {
    this.titleService.setTitle('Hauptseite');
    this.sharedService.emitTitleChange('Hauptseite');
    this.autoService.getMainFilter().subscribe((res: any) => {
      this.filters = res.data;
      console.log(this.filters);
    });
    this.autoService.getBestAutos(6).subscribe((res: any) => {
      this.carouselAutos = res.data;
      console.log('best', this.carouselAutos);
    });
  }

  process() {
    this.autoService.getFilterAutos(this.userFilter).subscribe((res: any) => {
      this.filteredAutos = res.data;
      console.log(res);
    },
    (res: any) => {
      console.error(res);
    });
    console.log(this.userFilter);
  }


  onChange(filter, value) {
    if (value === '') {
      delete this.userFilter[filter];
    } else {
      this.userFilter[filter] = value;
      console.log('Selected car', value);
    }
  }
}




