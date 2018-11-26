import { AutoService } from './../services/auto.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  private filters: Object;
  private images: string[];

  constructor(private autoService: AutoService) { }

  ngOnInit() {
    this.autoService.getMainFilter().subscribe((res: any) => {
      this.filters = res.data;
    });
    this.images = [1, 2, 3, 4, 5, 6].map(() => `https://picsum.photos/300/300?random&t=${Math.random()}`);
  }

}
