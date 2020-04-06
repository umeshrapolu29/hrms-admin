import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaydeleteComponent } from './holidaydelete.component';

describe('HolidaydeleteComponent', () => {
  let component: HolidaydeleteComponent;
  let fixture: ComponentFixture<HolidaydeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HolidaydeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HolidaydeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
