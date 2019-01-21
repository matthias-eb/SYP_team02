import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

interface Rating {
  ratingAverage: number;
  ratingCount: number;
}

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss']
})
export class AutosComponent implements OnInit, OnChanges {

  private ratings: Array<Rating>;
  @Input() autos: Object;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    this.updateRatings(changes.autos.currentValue);
    // You can also use categoryId.previousValue and
    // categoryId.firstChange for comparing old and new values
  }

  updateRatings(autos) {
    this.ratings = [];

    for (let i = 0; i < Array(autos).length; i++) {
      const average = this.calcAverage(autos[i]);
      this.ratings[autos[i].id] = { ratingAverage: average, ratingCount: autos[i].ratings.length };
    }
  }

  calcAverage(auto): number {
    let ratingAverage = 0;
    for (let n = 0; n < auto.ratings.length; n++) {
      ratingAverage += auto.ratings[n].rating;
    }
    ratingAverage /= auto.ratings.length;
    return ratingAverage;
  }

  getRating(id) {
    return this.ratings[id].ratingAverage || 0;
  }
}
