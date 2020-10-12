import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cui-datepicker-range-demo',
  templateUrl: './cui-datepicker-range-demo.component.html',
  styleUrls: ['./cui-datepicker-range-demo.component.less']
})
export class CuiDatepickerRangeDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  changeDate(args) {
    alert('Type:' + args.type + ' date:' + args.date);
  }
}
