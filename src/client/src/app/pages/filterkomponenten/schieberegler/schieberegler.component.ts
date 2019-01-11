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

  constructor() { }

  ngOnInit() {
    this.value = Number(this.schieberegler['data'][0].value);
  }

  onChange(filter: number, value: number) {
    this.value = value;
    this.userFilter[filter] = this.value.toString();
  }
}
