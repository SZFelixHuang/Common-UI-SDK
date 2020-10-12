import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'cui-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.less']
})
export class DropdownComponent implements OnInit {
  @Input()
  btnIcon = 'fa fa-list';

  @Input()
  contentAsHTML: boolean;

  @Input()
  arrow: boolean;

  @Input()
  displayText: string;

  @ViewChild('cuiDropdownBtn', { static: true })
  dropdownBtn: ElementRef;

  @ViewChild('cuiDropdownItems', { static: true })
  dropdownItemsContainer: ElementRef;

  constructor() {}

  ngOnInit() {
    const $dropdownBtn = $(this.dropdownBtn.nativeElement).tooltipster({
      contentAsHTML: this.contentAsHTML,
      interactive: true,
      arrow: this.arrow,
      theme: ['tooltipster-sidetip', 'cui-customized'],
      trigger: 'custom',
      triggerOpen: {
        click: true,
        touchstart: true
      },
      triggerClose: {
        mouseleave: true,
        touchleave: true
      },
      content: $(this.dropdownItemsContainer.nativeElement)
    });
    $dropdownBtn.tooltipster('content').click(
      function() {
        this.tooltipster('close');
      }.bind($dropdownBtn)
    );
  }
}
