import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cui-email-demo',
  templateUrl: './cui-email-demo.component.html',
  styleUrls: ['./cui-email-demo.component.less']
})
export class CuiEmailDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  doChange(args) {
    alert(args.value);
  }
}
