import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cui-password-demo',
  templateUrl: './cui-password-demo.component.html',
  styleUrls: ['./cui-password-demo.component.less']
})
export class CuiPasswordDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  doChange(args) {
    alert(args.value);
  }
}
