import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cui-datepicker-demo',
  templateUrl: './cui-datepicker-demo.component.html',
  styleUrls: ['./cui-datepicker-demo.component.less']
})
export class CuiDatepickerDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  changeDate(args) {
    alert(args.date);
  }
}
