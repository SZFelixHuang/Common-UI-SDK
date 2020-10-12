import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cui-datetimepicker-range-demo',
  templateUrl: './cui-datetimepicker-range-demo.component.html',
  styleUrls: ['./cui-datetimepicker-range-demo.component.less']
})
export class CuiDatetimepickerRangeDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  changeDate(args) {
    alert('Type:' + args.type + ' date:' + args.date);
  }
}
