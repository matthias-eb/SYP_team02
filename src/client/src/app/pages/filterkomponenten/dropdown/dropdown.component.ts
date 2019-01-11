import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() dropdown: Object;

  private userFilter: Object;

  constructor() {
    this.userFilter = {};
  }

  ngOnInit() {
  }


  onChange(filter, value) {
    if (value === '') {
      delete this.userFilter[filter];
    } else {
      this.userFilter[filter] = value;
      console.log('Selected car', value);
    }
  }
}
