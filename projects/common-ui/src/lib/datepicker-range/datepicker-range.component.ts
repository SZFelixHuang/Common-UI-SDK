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
  selector: 'cui-datepicker-range',
  templateUrl: './datepicker-range.component.html',
  styleUrls: ['./datepicker-range.component.less']
})
export class DatepickerRangeComponent implements OnInit {
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
  startValue: any;

  @Input()
  endValue: any;

  @ViewChild('startDatepicker', { static: true })
  startDatepicker: ElementRef;

  @ViewChild('endDatepicker', { static: true })
  endDatepicker: ElementRef;

  @Output() changeDate = new EventEmitter<{
    event: Event;
    date: Date;
    type: string;
  }>();

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
    $(this.startDatepicker.nativeElement)
      .datepicker(options)
      .datepicker('update', this.startValue ? new Date(this.startValue) : '')
      .on('changeDate', el => {
        this.changeDate.emit({ event: el, date: el.date, type: 'startDate' });
        if (!this.compareDate()) {
          $(this.startDatepicker.nativeElement).datepicker(
            'update',
            this.getSelectedEndDate()
          );
          alert('startDate must less than endDate');
        }
      });
    $(this.endDatepicker.nativeElement)
      .datepicker(options)
      .datepicker('update', this.endValue ? new Date(this.endValue) : '')
      .on('changeDate', el => {
        this.changeDate.emit({ event: el, date: el.date, type: 'endDate' });
        if (!this.compareDate()) {
          $(this.endDatepicker.nativeElement).datepicker(
            'update',
            this.getSelectedStartDate()
          );
          alert('endDate must greater than startDate');
        }
      });
  }

  private compareDate() {
    const startDate = this.getSelectedStartDate();
    const endDate = this.getSelectedEndDate();
    if (startDate && endDate) {
      return endDate > startDate;
    }
    return true;
  }

  getSelectedStartDate(): Date {
    return $(this.startDatepicker.nativeElement).datepicker('getDate');
  }

  getSelectedEndDate(): Date {
    return $(this.endDatepicker.nativeElement).datepicker('getDate');
  }
}
