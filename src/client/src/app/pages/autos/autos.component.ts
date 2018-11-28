import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss']
})
export class AutosComponent implements OnInit {

  private images: string[];

  constructor() { }

  ngOnInit() {
    this.images = [1, 2, 3, 4, 5, 6].map(() => `https://picsum.photos/200/200?random&t=${Math.random()}`);
  }

}
