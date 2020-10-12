import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cui-checkbox-demo',
  templateUrl: './cui-checkbox-demo.component.html',
  styleUrls: ['./cui-checkbox-demo.component.less']
})
export class CuiCheckboxDemoComponent implements OnInit {
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
