import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cui-select-demo',
  templateUrl: './cui-select-demo.component.html',
  styleUrls: ['./cui-select-demo.component.less']
})
export class CuiSelectDemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  selected(args)
  {
    alert(args.value);
  }
}
