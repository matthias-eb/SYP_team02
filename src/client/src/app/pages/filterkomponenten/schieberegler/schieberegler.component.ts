import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-schieberegler',
  templateUrl: './schieberegler.component.html',
  styleUrls: ['./schieberegler.component.scss']
})
export class SchiebereglerComponent implements OnInit {

  @Input() schieberegler: Object;
  @Input() userFilter: Object;
  private value: number;
  private btnDisabled: boolean;

  constructor() { }

  ngOnInit() {
    this.value = Number(this.schieberegler['data'][0].value);
    this.btnDisabled = true;
  }

  onChange(filter: number, value: number) {
    this.value = value;
    this.userFilter[filter] = this.value.toString();
    this.btnDisabled = false;
  }

  onClick(filter: number) {
    delete this.userFilter[filter];
    this.value = Number(this.schieberegler['data'][0].value);
    this.btnDisabled = true;
  }
}
