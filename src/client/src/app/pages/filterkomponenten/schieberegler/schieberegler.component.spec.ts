import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchiebereglerComponent } from './schieberegler.component';

describe('SchiebereglerComponent', () => {
  let component: SchiebereglerComponent;
  let fixture: ComponentFixture<SchiebereglerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchiebereglerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchiebereglerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
