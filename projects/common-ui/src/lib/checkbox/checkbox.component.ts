import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'cui-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less']
})
export class CheckboxComponent implements OnInit, AfterViewInit {
  @Input()
  id: string;

  @Input()
  name: string;

  @Input()
  value: any;

  @ViewChild('checkbox', { static: true })
  checkbox: ElementRef;

  @ViewChild('checkboxInput', { static: true })
  checkboxInput: ElementRef;

  @Output() checkChange = new EventEmitter<{
    event: Event;
    target: Object;
    value: any;
  }>();

  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.removeAttribute('id');
    this.elementRef.nativeElement.removeAttribute('name');
  }

  clickFn(event) {
    const target = this.checkboxInput.nativeElement;
    const value = $(target).val();
    this.checkChange.emit({ event, target, value });
  }
}
