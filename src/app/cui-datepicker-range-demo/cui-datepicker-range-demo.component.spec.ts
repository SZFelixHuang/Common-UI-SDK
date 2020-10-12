/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CuiDatepickerRangeDemoComponent } from './cui-datepicker-range-demo.component';

describe('CuiDatepickerRangeDemoComponent', () => {
  let component: CuiDatepickerRangeDemoComponent;
  let fixture: ComponentFixture<CuiDatepickerRangeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuiDatepickerRangeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuiDatepickerRangeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
