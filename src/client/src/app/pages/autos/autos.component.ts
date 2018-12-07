import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss']
})
export class AutosComponent implements OnInit {

  private images: string[];
  private currentRate;
  @Input() autos: Object;


  constructor() { }

  ngOnInit() {
    this.images = [1, 2, 3, 4, 5, 6, 7 , 8, 9, 10].map(() => `https://picsum.photos/200/200?random&t=${Math.random()}`);
    this.currentRate = 0;
  }

}
