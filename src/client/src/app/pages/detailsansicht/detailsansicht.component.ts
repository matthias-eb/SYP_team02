import {Component, OnInit} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {Title} from '@angular/platform-browser';
import {AutoService} from '../../services/auto.service';
import {ActivatedRoute} from '@angular/router';
import {RatingService} from '../../services/rating.service';
import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detailsansicht',
  templateUrl: './detailsansicht.component.html',
  styleUrls: ['./detailsansicht.component.scss'],
  providers: [NgbRatingConfig]
})
export class DetailsansichtComponent implements OnInit {

  private show = false;
  private buttonName: string = 'Weitere Details anzeigen';
  private auto: any;
  private currentRate: number;
  private autoId: number;

  constructor(
    private ratingConfig: NgbRatingConfig,
    private route: ActivatedRoute,
    private sharedService: SharedService,
    private titleService: Title,
    private autoService: AutoService,
    private ratingService: RatingService
  ) {
    ratingConfig.readonly= sharedService.getUserIdFromCache() < 1;
    ratingConfig.max=5;
  }

  ngOnInit() {
    this.titleService.setTitle('Auto Detailsansicht');
    this.sharedService.emitTitleChange('Auto Detailsansicht');
    this.autoId = +this.route.snapshot.paramMap.get('id');
    this.updateAuto();
  }

  /**
   * Function to toggle the  Weitere Details anzeigen/verbergen button.
   */
  toggle() {
    this.show = !this.show;

    // CHANGE THE NAME OF THE BUTTON.
    if (this.show)
      this.buttonName = 'Weitere Details verbergen';
    else
      this.buttonName = 'Weitere Details anzeigen';
  }

  onRating(autoId, index) {
    if (this.ratingConfig.readonly) { return; }
    const uid = this.sharedService.getUserIdFromCache();
    if (uid > 0) {
      this.ratingService.setAutoRating(uid, autoId, (index+1)).subscribe((res:any) => {
        this.ratingConfig.readonly = true;
        this.updateAuto();
      });
      console.log("setAutoRating("+autoId+","+uid+","+(index+1)+")");
    }
  }
  private updateAuto(): void{
    this.autoService.getFilterAutos({'id' : this.autoId }).subscribe((res: any) => {
      this.auto = res.data[0];
      if (!this.ratingConfig.readonly) {
        const uid = this.sharedService.getUserIdFromCache();
        for (let i = 0; i < this.auto.ratings.length; i++) {
          if (this.auto.ratings[i].user_id === uid) {
            this.ratingConfig.readonly = true;
          } 
        }
      }
      this.calcAverage();
    });
  }
  calcAverage(): void {
    let ratingAverage = 0;
    for (let n = 0; n < this.auto.ratings.length; n++) {
      ratingAverage += this.auto.ratings[n].rating;
    }
    ratingAverage /= this.auto.ratings.length;
    this.currentRate = ratingAverage || 0;
    this.currentRate = parseInt(String(this.currentRate * 100)) / 100;
    console.log('currentRate:', this.currentRate);
  }

}
