import {Component, OnInit} from '@angular/core';
import {BrowseFetchService} from './fetch/';
import {NavigatorService} from '../../navigate';
import {transform} from './transform';

@Component({
  selector: 'browse',
  template: `
    <grid [rows]="requests"
          (rowClicked)="onRowClicked($event)"
    >
    </grid>
  `,
  styles: [`
  `]
})
export class BrowseComponent implements OnInit {
  requests: any[];

  constructor(private fetchService: BrowseFetchService,
              private navigator: NavigatorService) {
  }

  ngOnInit() {
    return this.fetch();
  }

  onRowClicked(payload: any): void {
    this.navigator.goto(['/' + payload.type.toLowerCase(), payload.requestId], payload);
  }

  fetch() {
    return new Promise((resolve) => {
      const futureEraseRequests = this.fetchService.fetch('ERASE');
      const futureAccessRequests = this.fetchService.fetch('ACCESS');
      Promise.all([futureEraseRequests, futureAccessRequests]).then((requests) => {
        this.requests = transform([...requests[0], ...requests[1]]);
        resolve(this.requests);
      });
    });
  }
}
