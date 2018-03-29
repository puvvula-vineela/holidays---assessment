import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaydetailsComponent } from './holidaydetails.component';

describe('HolidaydetailsComponent', () => {
  let component: HolidaydetailsComponent;
  let fixture: ComponentFixture<HolidaydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidaydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidaydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
