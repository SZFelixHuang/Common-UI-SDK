/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CuiDatetimepickerRangeDemoComponent } from './cui-datetimepicker-range-demo.component';

describe('CuiDatetimepickerRangeDemoComponent', () => {
  let component: CuiDatetimepickerRangeDemoComponent;
  let fixture: ComponentFixture<CuiDatetimepickerRangeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuiDatetimepickerRangeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuiDatetimepickerRangeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
