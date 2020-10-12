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
  selector: 'cui-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.less']
})
export class PhoneComponent implements OnInit {
  @Input()
  name: string;

  @Input()
  value = '';

  @Output() phoneChange = new EventEmitter<{
    event: Event;
    value: string;
  }>();

  @ViewChild('cuiPhone', { static: true })
  cuiPhone: ElementRef;

  instance: any;

  constructor() {}

  ngOnInit() {
    const options = JSON.parse('{}');
    options.customContainer = 'form-group cui-phone';
    this.instance = (window as any).intlTelInput(
      this.cuiPhone.nativeElement,
      options
    );
    if (this.value) {
      this.instance.setNumber(this.value);
      this.checkPhoneNumber();
    }
  }

  getPhoneNumber() {
    return this.instance.getNumber();
  }

  getSelectedCountry() {
    return this.instance.getSelectedCountryData();
  }

  isValidNumber() {
    return this.instance.isValidNumber();
  }

  checkPhoneNumber() {
    if (this.isValidNumber()) {
      return true;
    }
    alert('The phone number you inputed is not validly!');
    this.instance.setNumber('');
    return false;
  }

  changeEmit(event) {
    const value = this.getPhoneNumber();
    if (this.checkPhoneNumber()) {
      this.phoneChange.emit({ event, value });
    }
  }
}
