import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cui-switch-demo',
  templateUrl: './cui-switch-demo.component.html',
  styleUrls: ['./cui-switch-demo.component.less']
})
export class CuiSwitchDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  switchChange(event) {
    alert('state is: ' + event.state);
  }
}
