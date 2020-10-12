import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cui-dropdown-item',
  templateUrl: './dropdown-item.component.html',
  styleUrls: ['./dropdown-item.component.less']
})
export class DropdownItemComponent implements OnInit {
  @Input()
  href: string;

  // tslint:disable-next-line: no-output-native
  @Output() click = new EventEmitter<Event>();

  constructor() {}

  ngOnInit() {}

  clickEvent(event) {
    this.click.emit(event);
  }
}
