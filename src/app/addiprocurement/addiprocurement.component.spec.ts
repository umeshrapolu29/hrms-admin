import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddiprocurementComponent } from './addiprocurement.component';

describe('AddiprocurementComponent', () => {
  let component: AddiprocurementComponent;
  let fixture: ComponentFixture<AddiprocurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddiprocurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddiprocurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
