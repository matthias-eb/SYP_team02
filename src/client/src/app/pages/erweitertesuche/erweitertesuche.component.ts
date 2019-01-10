import {Component,  OnInit} from '@angular/core';
import {SharedService} from '../../services/shared.service';
import {Title} from '@angular/platform-browser';
import {AutoService} from '../../services/auto.service';

@Component({
  selector: 'app-erweitertesuche',
  templateUrl: './erweitertesuche.component.html',
  styleUrls: ['./erweitertesuche.component.scss']
})
export class ErweitertesucheComponent implements OnInit {
  private filters: Object;
  private userFilter: Object;
  private filteredAutos: Object;

  constructor(private sharedService: SharedService, private titleService: Title, private autoService: AutoService) {
    this.userFilter = {};
  }

  ngOnInit() {

    this.titleService.setTitle('Erweiterte Suche');
    this.sharedService.emitTitleChange('Erweiterte Suche');
    this.autoService.getFilter().subscribe((res: any) => {
      this.filters = res.data;
      console.log(this.filters);
    });

  }


  process() {
    this.autoService.getFilterAutos(this.userFilter).subscribe((res: any) => {
        this.filteredAutos = res.data;
        console.log(res);
      },
      (res: any) => {
        console.error(res);
      });
    console.log(this.userFilter);
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
