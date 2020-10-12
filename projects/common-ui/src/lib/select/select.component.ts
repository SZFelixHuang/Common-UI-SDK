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
  selector: 'cui-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent implements OnInit {
  @Input()
  search = false;

  @ViewChild('cuiSelect', { static: true })
  cuiSelect: ElementRef;

  @Output() selected = new EventEmitter<{ event: Event; value: any }>();

  constructor() {}

  ngOnInit() {
    const options = JSON.parse('{}');
    options.liveSearch = this.search;
    $(this.cuiSelect.nativeElement).selectpicker(options);
    $(this.cuiSelect.nativeElement).on(
      'changed.bs.select',
      function(e) {
        const value = this.getSelectValue();
        this.selected.emit({ e, value });
      }.bind(this)
    );
  }

  getSelectValue() {
    return $(this.cuiSelect.nativeElement).selectpicker('val');
  }
}
