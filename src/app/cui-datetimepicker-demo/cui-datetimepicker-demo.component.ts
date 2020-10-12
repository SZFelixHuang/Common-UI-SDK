import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cui-datetimepicker-demo',
  templateUrl: './cui-datetimepicker-demo.component.html',
  styleUrls: ['./cui-datetimepicker-demo.component.less']
})
export class CuiDatetimepickerDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  changeDate(args) {
    alert(' date:' + args.date);
  }
}
