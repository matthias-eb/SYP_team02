import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() checkbox: Object;
  @Input() userFilter: Object;

  constructor() { }

  ngOnInit() {
  }

  /**
   *
   * To recognize changes
   * @param filter integer number of the filter
   * @param value boolean type of the value
   *
   * @return value of the current filter can be 0 or 1.
   */
  onChange(filter: number, value: boolean) {
    if (value) {
      this.userFilter[filter] = 1;
    } else {
      delete this.userFilter[filter];
    }
  }
}
