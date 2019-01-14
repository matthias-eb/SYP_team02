import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() dropdown: Object;
  @Input() userFilter: Object;

  ngOnInit() { }


  /**
   *
   * To recognize changes
   * @param filter integer number of the filter
   * @param value integer number of the value
   *
   * @return value of the current filter if value ist not null. If value is null, delete filter value.
   */

  onChange(filter: number, value: string) {
    if (value === '') {
      delete this.userFilter[filter];
    } else {
      this.userFilter[filter] = value;
    }
  }
}
