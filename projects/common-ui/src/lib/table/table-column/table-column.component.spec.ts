/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableColumnComponent } from './table-column.component';

describe('TableColumnComponent', () => {
  let component: TableColumnComponent;
  let fixture: ComponentFixture<TableColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
