import {Component, OnInit} from '@angular/core';
import {AutoService} from '../services/auto.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent implements OnInit {
  private filters: Object;
  private images: string[];
  private userFilter: Object;
  private filteredAutos: Object;


  constructor(private autoService: AutoService) {
    this.userFilter = { };
  }

  ngOnInit() {
    this.autoService.getMainFilter().subscribe((res: any) => {
      this.filters = res.data;
      console.log(this.filters);
    });
    this.images = [1, 2, 3, 4, 5, 6].map(() => `https://picsum.photos/300/300?random&t=${Math.random()}`);
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




