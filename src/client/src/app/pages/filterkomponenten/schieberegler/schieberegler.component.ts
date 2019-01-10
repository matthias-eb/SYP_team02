import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-schieberegler',
  templateUrl: './schieberegler.component.html',
  styleUrls: ['./schieberegler.component.scss']
})
export class SchiebereglerComponent implements OnInit {

  @Input() schieberegler: Object;

  constructor() { }

  ngOnInit() {
  }
}
