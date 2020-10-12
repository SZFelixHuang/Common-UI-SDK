import {
  Component,
  OnInit,
  Input,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'cui-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.less']
})
export class SwitchComponent implements OnInit {
  constructor() {}

  @Input()
  name: string;

  @ViewChild('cuiSwitch', { static: true })
  cuiSwitch: ElementRef;

  @Input()
  size: string;

  @Input()
  onColor: string;

  @Input()
  offColor: string;

  @Input()
  disabled = false;

  @Input()
  readonly = false;

  @Input()
  state = false;

  @Input()
  onText: string;

  @Input()
  offText: string;

  @Input()
  value: any;

  @Output() switchChange = new EventEmitter<{ event: Event; state: any }>();

  ngOnInit() {
    const $cuiSwitch = ($(
      this.cuiSwitch.nativeElement
    ) as any).bootstrapSwitch();
    if (this.size) {
      $cuiSwitch.bootstrapSwitch('size', this.size);
    }
    if (this.onColor) {
      $cuiSwitch.bootstrapSwitch('onColor', this.onColor);
    }
    if (this.offColor) {
      $cuiSwitch.bootstrapSwitch('offColor', this.offColor);
    }
    if (this.onText) {
      $cuiSwitch.bootstrapSwitch('onText', this.onText);
    }
    if (this.offText) {
      $cuiSwitch.bootstrapSwitch('offText', this.offText);
    }
    $cuiSwitch.bootstrapSwitch('disabled', this.disabled);
    $cuiSwitch.bootstrapSwitch('readonly', this.readonly);
    $cuiSwitch.bootstrapSwitch('state', this.state);
    $cuiSwitch.on('switchChange.bootstrapSwitch', (el, stateVal) => {
      this.switchChange.emit({ event: el, state: stateVal });
    });
  }
}
