import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss']
})
export class AutosComponent implements OnInit {

  private currentRate;
  @Input() autos: Object;


  constructor() { }

  ngOnInit() {
    this.currentRate = 0;
  }

}
