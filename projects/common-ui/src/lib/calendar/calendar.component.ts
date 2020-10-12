import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import Calendar from 'tui-calendar';

@Component({
  selector: 'cui-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.less']
})
export class CalendarComponent implements OnInit {
  @ViewChild('cuiCalendar', { static: true })
  cuiCalendar: ElementRef;

  constructor() {}

  ngOnInit() {
    const calendar = new Calendar(this.cuiCalendar.nativeElement, {
      defaultView: 'month'
    });
  }
}
