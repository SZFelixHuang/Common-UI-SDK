import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ElementRef,
  ViewChild,
  Input
} from '@angular/core';

@Component({
  selector: 'cui-datetimepicker-range',
  templateUrl: './datetimepicker-range.component.html',
  styleUrls: ['./datetimepicker-range.component.less']
})
export class DatetimepickerRangeComponent implements OnInit {
  constructor() {}

  @Input()
  format = 'MM/DD/YYYY hh:mm:ss';

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
  value: any;

  @Output() changeDate = new EventEmitter<{
    event: Event;
    date: Date;
    type: string;
  }>();

  @ViewChild('startDatetimepicker', { static: true })
  startDatetimepicker: ElementRef;

  @ViewChild('endDatetimepicker', { static: true })
  endDatetimepicker: ElementRef;

  ngOnInit() {
    const options = JSON.parse('{}');
    options.format = this.format;
    options.allowInputToggle = true;
    options.showClose = true;
    options.showClear = this.clearBtn;
    options.showTodayButton = this.todayBtn;
    options.useCurrent = false;
    if (this.startDate) {
      options.minDate = this.startDate;
    }
    if (this.endDate) {
      options.maxDate = this.endDate;
    }
    if (this.value) {
      options.defaultDate = this.value ? new Date(this.value) : '';
    }
    $(this.startDatetimepicker.nativeElement)
      .datetimepicker(options)
      .on(
        'dp.change',
        function(el) {
          this.changeDate.emit({
            event: el,
            date: new Date(el.date['_d']),
            type: 'startDatetimepicker'
          });
        }.bind(this)
      );

    $(this.endDatetimepicker.nativeElement)
      .datetimepicker(options)
      .on(
        'dp.change',
        function(el) {
          this.changeDate.emit({
            event: el,
            date: new Date(el.date['_d']),
            type: 'endDatetimepicker'
          });
          if (!this.compareDate()) {
            $(this.endDatetimepicker.nativeElement).data(
              'date',
              this.getSelectedStartDate()
            );
            alert('endDate must greater than startDate');
          }
        }.bind(this)
      );
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
    return $(this.startDatetimepicker.nativeElement).data('date');
  }

  getSelectedEndDate(): Date {
    return $(this.endDatetimepicker.nativeElement).data('date');
  }
}
