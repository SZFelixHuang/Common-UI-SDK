import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'cui-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.less']
})
export class TableRowComponent implements OnInit, OnDestroy {
  @ViewChild('cuiTableRow', { static: true })
  cuiTableRow: ElementRef<any>;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.elementRef.nativeElement.outerHTML = this.cuiTableRow.nativeElement.outerHTML;
  }

  ngOnDestroy() {
    this.cuiTableRow.nativeElement.remove();
  }
}
