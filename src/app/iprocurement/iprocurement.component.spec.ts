import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IprocurementComponent } from './iprocurement.component';

describe('IprocurementComponent', () => {
  let component: IprocurementComponent;
  let fixture: ComponentFixture<IprocurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IprocurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IprocurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
