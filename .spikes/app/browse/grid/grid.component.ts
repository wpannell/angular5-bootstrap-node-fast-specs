import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {GridOptions} from 'ag-grid/main';

@Component({
  selector: 'grid',
  template: `
      <ag-grid-angular
        style="width: 100%; height: 70%; margin: auto;"
        class="ag-theme-fresh"
        [paginationAutoPageSize]="true"
        [enableColResize]="true"
        [rowData]="rows"
        [columnDefs]="columnDefinitions"
        [gridOptions]="gridOptions"
        [rowSelection]="rowSelection"
        (gridReady)="onGridReady($event)"
        (rowClicked)="onRowClicked($event)"
      >
      </ag-grid-angular>
  `,
    styles: [`
      .ag-header-cell-label {
        text-align: left;
      }
    `]
})
export class GridComponent implements OnInit {
  columnDefinitions: any[];
  rowSelection: any;
  gridOptions: GridOptions;

  @Input() rows: any[];

  @Output() rowClicked: EventEmitter<any> = new EventEmitter<any>();

  onRowClicked(event: any) {
   const  payload = {requestId: event.data.requestId , type: event.data.type};
    this.rowClicked.emit(payload);
  }

  constructor() {
    this.gridOptions = <GridOptions>{};
    this.columnDefinitions = [
      {headerName: 'Request Id', field: 'requestId' , suppressFilter: false, suppressSorting: true},
      {headerName: 'Request Type', field: 'type'},
      {headerName: 'First Name', field: 'firstName', suppressFilter: true, suppressSorting: true},
      {headerName: 'Last Name', field: 'lastName', suppressFilter: true, suppressSorting: true},
      {headerName: 'Last Updated', field: 'lastUpdated', suppressFilter: true, suppressSorting: true},
      {headerName: 'Request Age', field: 'age', suppressFilter: true, sort: 'desc'},
      {headerName: 'Created', field: 'created', suppressFilter: true, suppressSorting: true, hide: true},
      {headerName: 'Assign To', field: 'assignTo', suppressSorting: true},
      {headerName: 'Status', field: 'status'}
    ];

    this.gridOptions = {
      columnDefs: this.columnDefinitions,
      enableFilter: true,
      enableSorting: true,
      pagination: true
    };

    this.rowSelection = 'single';
  }


  onGridReady(params): void {
    params.api.sizeColumnsToFit();
  }
  ngOnInit() {
  }
}
