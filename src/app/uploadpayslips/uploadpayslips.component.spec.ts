import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadpayslipsComponent } from './uploadpayslips.component';

describe('UploadpayslipsComponent', () => {
  let component: UploadpayslipsComponent;
  let fixture: ComponentFixture<UploadpayslipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadpayslipsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadpayslipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
