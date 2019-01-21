import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

interface Rating {
  ratingAverage: number;
  ratingCount: number;
}

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.scss'],
  providers: [NgbRatingConfig]
})
export class AutosComponent implements OnInit, OnChanges {

  private ratings: Array<Rating>;
  @Input() autos: Object;

  constructor(ratingConfig: NgbRatingConfig) { 
    ratingConfig.max=5;
    ratingConfig.readonly=true;
  }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    this.updateRatings(changes.autos.currentValue);
    // You can also use categoryId.previousValue and
    // categoryId.firstChange for comparing old and new values
  }

  updateRatings(autos) {
    this.ratings = [];
    //console.log(autos.length);
    for (let i = 0; i < autos.length; i++) {
      const average = this.calcAverage(autos[i]);
      //console.log(autos[i].id);
      this.ratings[autos[i].id] = { ratingAverage: average, ratingCount: autos[i].ratings.length };
    }
    //console.log(autos);
    //console.log(this.ratings);
  }

  calcAverage(auto): number {
    let ratingAverage = 0;
    for (let n = 0; n < auto.ratings.length; n++) {
      ratingAverage += auto.ratings[n].rating;
    }
    ratingAverage /= auto.ratings.length;
    ratingAverage = parseInt(String(ratingAverage * 100)) / 100;
    return ratingAverage;
  }

  getRating(id) {
    const rating = this.ratings[id];
    if (!rating) return 0; 
    return rating.ratingAverage || 0;
  }
}
