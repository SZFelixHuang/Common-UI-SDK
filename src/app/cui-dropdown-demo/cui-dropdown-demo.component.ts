import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cui-dropdown-demo',
  templateUrl: './cui-dropdown-demo.component.html',
  styleUrls: ['./cui-dropdown-demo.component.less']
})
export class CuiDropdownDemoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  choose(n) {
    alert(n);
  }
}
