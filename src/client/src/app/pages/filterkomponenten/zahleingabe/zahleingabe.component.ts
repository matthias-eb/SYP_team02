import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-zahleingabe',
  templateUrl: './zahleingabe.component.html',
  styleUrls: ['./zahleingabe.component.scss']
})
export class ZahleingabeComponent implements OnInit {

  @Input() zahleingabe: Object;

  constructor() { }

  ngOnInit() {
  }

}
