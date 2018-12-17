import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErweitertesucheComponent } from './erweitertesuche.component';

describe('ErweitertesucheComponent', () => {
  let component: ErweitertesucheComponent;
  let fixture: ComponentFixture<ErweitertesucheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErweitertesucheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErweitertesucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
