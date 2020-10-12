/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CuiDatetimepickerDemoComponent } from './cui-datetimepicker-demo.component';

describe('CuiDatetimepickerDemoComponent', () => {
  let component: CuiDatetimepickerDemoComponent;
  let fixture: ComponentFixture<CuiDatetimepickerDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuiDatetimepickerDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuiDatetimepickerDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
