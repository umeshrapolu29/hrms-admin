import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkattendanceComponent } from './markattendance.component';

describe('MarkattendanceComponent', () => {
  let component: MarkattendanceComponent;
  let fixture: ComponentFixture<MarkattendanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkattendanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkattendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
