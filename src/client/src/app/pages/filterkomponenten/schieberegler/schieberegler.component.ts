import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-schieberegler',
  templateUrl: './schieberegler.component.html',
  styleUrls: ['./schieberegler.component.scss']
})
export class SchiebereglerComponent implements OnInit {

  @Input() schieberegler: Object;
  @Input() userFilter: Object;

  constructor() { }

  ngOnInit() { }

  onChange(filter: number, value: number) {
    this.userFilter[filter] = value.toString();
  }
}
