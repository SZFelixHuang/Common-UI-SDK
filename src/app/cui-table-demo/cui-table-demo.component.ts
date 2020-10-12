import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cui-table-demo',
  templateUrl: './cui-table-demo.component.html',
  styleUrls: ['./cui-table-demo.component.less']
})
export class CuiTableDemoComponent implements OnInit {
  loop = new Array(100);

  constructor() {}

  ngOnInit() {}
}
