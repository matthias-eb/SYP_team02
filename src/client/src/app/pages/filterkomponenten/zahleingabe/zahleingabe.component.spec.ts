import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahleingabeComponent } from './zahleingabe.component';

describe('ZahleingabeComponent', () => {
  let component: ZahleingabeComponent;
  let fixture: ComponentFixture<ZahleingabeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZahleingabeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZahleingabeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
