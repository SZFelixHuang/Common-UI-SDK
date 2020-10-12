import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'cui-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.less']
})
export class OptionComponent implements OnInit {

  @ViewChild('cuiOption', { static: true })
  cuiOption: ElementRef;

  constructor(private elementRef: ElementRef) { }

  @Input()
  value: string;

  ngOnInit() {
    this.elementRef.nativeElement.outerHTML = this.cuiOption.nativeElement.outerHTML;
  }
}