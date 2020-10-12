import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'cui-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.less']
})
export class EmailComponent implements OnInit {
  @Input()
  name: string;

  @Input()
  value = '';

  @Output() emailChange = new EventEmitter<{
    event: Event;
    value: string;
  }>();

  @ViewChild('cuiEmail', { static: true })
  cuiEmail: ElementRef;

  constructor() {}

  ngOnInit() {}

  changeEmit(event) {
    const value = this.cuiEmail.nativeElement.value;
    this.emailChange.emit({ event, value });
  }
}
