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

  /**
   *
   * To recognize changes
   * @param filter integer number of the filter
   * @param value integer number of the value
   *
   * @return value of the current filter if value ist not null as a string.
   */
  onChange(filter: number, value: number) {
    this.value = value;
    this.userFilter[filter] = this.value.toString();
    this.btnDisabled = false;
  }

  /**
   * To Reset the value of the filter.
   * @param filter integer number of the filter
   *
   * @return set value to null.
   */
  onClick(filter: number) {
    delete this.userFilter[filter];
    this.value = Number(this.schieberegler['data'][0].value);
    this.btnDisabled = true;
  }
}
