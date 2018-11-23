import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }
  images = [1, 2, 3, 4, 5, 6].map(() => `https://picsum.photos/300/300?random&t=${Math.random()}`);
  ngOnInit() {
  }


}
