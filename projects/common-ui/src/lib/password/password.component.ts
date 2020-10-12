import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'cui-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.less']
})
export class PasswordComponent implements OnInit {
  @Input()
  name: string;

  @Input()
  value = '';

  @Output() passwordChange = new EventEmitter<{
    event: Event;
    value: string;
  }>();

  @ViewChild('cuiPassword', { static: true })
  cuiPassword: ElementRef;

  constructor() {}

  ngOnInit() {
    ($(this.cuiPassword.nativeElement) as any).password();
  }

  changeEmit(event) {
    const value = this.cuiPassword.nativeElement.value;
    this.passwordChange.emit({ event, value });
  }
}
