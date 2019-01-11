import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AnmeldenComponent } from './anmelden.component';

describe('AnmeldenComponent', () => {
  let component: AnmeldenComponent;
  let fixture: ComponentFixture<AnmeldenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbAlertModule,
        HttpClientModule
      ],
      declarations: [ AnmeldenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnmeldenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
