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

  onChange(filter: number, value: boolean) {
    if (value) {
      this.userFilter[filter] = 1;
    } else {
      delete this.userFilter[filter];
    }
  }
}
