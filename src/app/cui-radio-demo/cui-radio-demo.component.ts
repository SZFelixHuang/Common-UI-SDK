import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cui-radio-demo',
  templateUrl: './cui-radio-demo.component.html',
  styleUrls: ['./cui-radio-demo.component.less']
})
export class CuiRadioDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  doClick(args) {
    alert(
      'I am input, my name is ' +
        args.target.name +
        ', my value is ' +
        args.value
    );
  }
}
