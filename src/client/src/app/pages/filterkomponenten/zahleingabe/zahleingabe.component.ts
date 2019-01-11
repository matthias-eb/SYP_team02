import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-zahleingabe',
  templateUrl: './zahleingabe.component.html',
  styleUrls: ['./zahleingabe.component.scss']
})
export class ZahleingabeComponent implements OnInit {

  @Input() zahleingabe: Object;
  @Input() userFilter: Object;

  constructor() { }

  ngOnInit() { }

  onChange(filter: number, value: number) {
    if (value.toString() === '') {
      delete this.userFilter[filter];
    } else {
      this.userFilter[filter] = value.toString();
    }
  }
}
