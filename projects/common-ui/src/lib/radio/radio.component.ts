import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  Input,
  ElementRef,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'cui-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.less']
})
export class RadioComponent implements OnInit, AfterViewInit {
  @Input()
  id: string;

  @Input()
  name: string;

  @Input()
  value: any;

  @ViewChild('radio', { static: true })
  radio: ElementRef;

  @ViewChild('radioInput', { static: true })
  radioInput: ElementRef;

  @Output() radioChange = new EventEmitter<{
    event: Event;
    target: Object;
    value: any;
  }>();
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    if (!this.id) {
      throw new Error('Id attribute can not be empty!!!');
    }
  }
  ngAfterViewInit(): void {
    this.elementRef.nativeElement.removeAttribute('id');
    this.elementRef.nativeElement.removeAttribute('name');
  }

  clickFn(event) {
    const target = this.radioInput.nativeElement;
    const value = $(target).val();
    this.radioChange.emit({ event, target, value });
  }
}
