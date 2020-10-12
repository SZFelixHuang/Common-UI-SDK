import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Input,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'cui-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.less']
})
export class DatetimepickerComponent implements OnInit {
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

  @Output() changeDate = new EventEmitter<{ event: Event; date: Date }>();

  @ViewChild('datetimepicker', { static: true })
  datetimepicker: ElementRef;

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
    $(this.datetimepicker.nativeElement)
      .datetimepicker(options)
      .on(
        'dp.change',
        function(el) {
          this.changeDate.emit({ event: el, date: new Date(el.date['_d']) });
        }.bind(this)
      );
  }

  getSelectedDate(): Date {
    return $(this.datetimepicker.nativeElement).data('date');
  }
}
