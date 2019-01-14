import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsansichtComponent } from './detailsansicht.component';

describe('DetailsansichtComponent', () => {
  let component: DetailsansichtComponent;
  let fixture: ComponentFixture<DetailsansichtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsansichtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsansichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
