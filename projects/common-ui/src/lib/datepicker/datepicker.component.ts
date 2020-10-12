import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  ElementRef,
  Input
} from '@angular/core';

@Component({
  selector: 'cui-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.less']
})
export class DatepickerComponent implements OnInit {
  constructor() {}

  @Input()
  format = 'mm/dd/yyyy';

  @Input()
  startDate: any;

  @Input()
  endDate: any;

  @Input()
  startView: string;

  @Input()
  clearBtn = true;

  @Input()
  todayBtn = true;

  @Input()
  minViewMode: string;

  @Input()
  maxViewMode: string;

  @Input()
  value: any;

  @ViewChild('datepicker', { static: true })
  datepicker: ElementRef;

  @Output() changeDate = new EventEmitter<{ event: Event; date: Date }>();

  ngOnInit() {
    const options = JSON.parse('{}');
    options.autoclose = true;
    options.todayHighlight = true;
    options.format = this.format;
    options.clearBtn = this.clearBtn;
    options.todayBtn = this.todayBtn;
    if (this.startDate) {
      options.startDate = this.startDate;
    }
    if (this.endDate) {
      options.endDate = this.endDate;
    }
    if (this.startView) {
      options.startView = this.startView;
    }
    if (this.maxViewMode) {
      options.maxViewMode = this.maxViewMode;
    }
    if (this.minViewMode) {
      options.minViewMode = this.minViewMode;
    }
    $(this.datepicker.nativeElement)
      .datepicker(options)
      .datepicker('update', this.value ? new Date(this.value) : '')
      .on('changeDate', el => {
        this.changeDate.emit({ event: el, date: el.date });
      });
  }

  getSelectedDate(): Date {
    return $(this.datepicker.nativeElement).datepicker('getDate');
  }
}
