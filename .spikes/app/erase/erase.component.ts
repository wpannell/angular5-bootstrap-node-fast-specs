import {Component, OnInit} from '@angular/core';
import {EraseFetchService} from './fetch';
import {transformDetails} from './transform-details';
import {NavigatorService} from '../../navigate';

@Component({
  selector: 'erase',
  template:
  `
    <erase-header>
      <back></back>
      <logout dpo="gary"></logout>
    </erase-header>
    <div class="row">
      <nav class="col-md-4 d-none d-md-block bg-light sidebar">
        <div class = "sidebar-sticky">
          <requestor [details]="details"></requestor>
        </div>
        <div class = "sidebar-sticky">
          <options-panel [details]="details"></options-panel>
        </div>
      </nav>
      <audit-trail [details]="details" title="Erase Request" class="col-md-8"></audit-trail>
    </div>
  `,
  styles : [
  `
  `
  ]
})
export class EraseComponent implements OnInit {
  details: any;

  constructor(
    private fetchService: EraseFetchService,
    private navigator: NavigatorService
  ) {}

  ngOnInit(): any {
    const payload = this.navigator.payload();

    return this.fetchService.fetch(payload.requestId).then(details => {
      this.details = transformDetails(details);
    });
  }

  fetch() {}
}
