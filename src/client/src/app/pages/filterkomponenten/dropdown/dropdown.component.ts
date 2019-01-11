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

  onChange(filter: number, value: string) {
    if (value === '') {
      delete this.userFilter[filter];
    } else {
      this.userFilter[filter] = value;
    }
  }
}
