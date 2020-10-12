import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cui-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.less']
})
export class TabComponent implements OnInit {
  @Input()
  routeUrl: string;

  constructor() {}

  ngOnInit() {}
}
