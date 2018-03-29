import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayslistComponent } from './holidayslist.component';

describe('HolidayslistComponent', () => {
  let component: HolidayslistComponent;
  let fixture: ComponentFixture<HolidayslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidayslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidayslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
