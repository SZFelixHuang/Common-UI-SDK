import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cui-phone-demo',
  templateUrl: './cui-phone-demo.component.html',
  styleUrls: ['./cui-phone-demo.component.less']
})
export class CuiPhoneDemoComponent implements OnInit {
  @ViewChild('getPhoneNumber', { static: true })
  getPhoneNumber: ElementRef;

  @ViewChild('getSelectedCountry', { static: true })
  getSelectedCountry: ElementRef;

  @ViewChild('isValidNumber', { static: true })
  isValidNumber: ElementRef;

  constructor() {}

  ngOnInit() {}

  getPhoneNumberMethod(event) {
    alert((this.getPhoneNumber as any).getPhoneNumber());
  }

  getSelectedCountryMethod(event) {
    const data = (this.getSelectedCountry as any).getSelectedCountry();
    alert('Country: ' + data.name + ' dialCode: ' + data.dialCode);
  }

  isValidNumberMethod(event) {
    alert((this.isValidNumber as any).isValidNumber());
  }

  phoneChangeEvent(args) {
    alert(args.value);
  }
}
