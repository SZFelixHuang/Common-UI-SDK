import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'cui-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements AfterViewInit {
  @Input()
  dataUrl: string;

  @Input()
  dataPagination = true;

  @Input()
  staticSearch = false;

  @Input()
  showToggle = true;

  @Input()
  showExport = true;

  @Input()
  showPrint = true;

  @Input()
  showFullscreen = true;

  @Input()
  showRefresh = true;

  @Input()
  showColumns = true;

  @Input()
  cache = false;

  @Input()
  pageNumber = 1;

  @Input()
  buttonsToolbar: string;

  @ViewChild('cuiTable', { static: true })
  cuiTable: ElementRef;

  @ViewChild('toolbar', { static: true })
  toolbar: ElementRef;

  constructor() {}

  ngAfterViewInit() {
    ($(this.cuiTable.nativeElement) as any).bootstrapTable({
      search: this.staticSearch,
      visibleSearch: this.staticSearch,
      showSearchClearButton: this.staticSearch,
      showExport: this.showExport,
      toolbar: this.showExport
        ? '#' +
          $(this.toolbar.nativeElement)
            .css('display', 'block')
            .attr('id')
        : '',
      toolbarAlign: 'left',
      buttonsToolbar: this.buttonsToolbar,
      exportDataType: 'basic',
      exportTypes: ['xml', 'csv', 'txt', 'excel', 'pdf'],
      showPrint: this.showPrint,
      showFullscreen: this.showFullscreen,
      showToggle: this.showToggle,
      classes: 'table table-hover cui-table-component',
      theadClasses: 'cui-table-header',
      rowStyle: 'cui-table-row',
      buttonsClass: 'cui-table-buttons-color',
      showColumns: this.showColumns,
      showColumnsToggleAll: this.showColumns,
      showButtonText: true,
      showRefresh: this.showRefresh,
      icons: {
        paginationSwitchDown: 'fa-caret-square-down',
        paginationSwitchUp: 'fa-caret-square-up',
        export: 'fa fa-download',
        refresh: 'fa fa-refresh',
        toggleOff: 'fa-toggle-off',
        toggleOn: 'fa-toggle-on',
        columns: 'fa-th-list',
        fullscreen: 'fa-arrows-alt',
        print: 'fa fa-print'
      },
      formatExport: () => {
        return 'Export';
      },
      formatRefresh: () => {
        return 'Refresh';
      },
      formatToggleOff: () => {
        return 'Hide card view';
      },
      formatToggleOn: () => {
        return 'Show card view';
      },
      formatColumns: () => {
        return 'Columns';
      },
      formatFullscreen: () => {
        return 'Fullscreen';
      },
      cache: this.cache,
      pageNumber: this.pageNumber,
      pageSize: 10,
      pageList: [10, 25, 50, 100],
      pagination: this.dataPagination,
      url: this.dataUrl
    });
  }
}
