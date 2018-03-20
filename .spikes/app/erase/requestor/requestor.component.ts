import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbAccordion} from '@ng-bootstrap/ng-bootstrap';
import {NgbPanel} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'requestor',
  template:
  `
    <ul class = "nav flex-column">
      <hr/>
      <p class="font-weight-bold mb-0">
                Requestor Name:
              </p>
      <li class = "nav-item nav-link">
        <p class="font-weight-normal mt-0" rel="first-name-last-name">
          {{details?.firstName}} {{details?.lastName}}
        </p>
      </li>
      <li class = "nav-item nav-link">
        <p class="font-weight-bold mb-0">
          CUPID (s):
        </p>
        <ngb-accordion #acc="ngbAccordion" class="ml-0">
          <ngb-panel class="accordion-toggle panel-collapse collapse" data-toggle="collapse" title="{{details?.head}}">
            <ng-template ngbPanelContent class="panel-collapse collapse">
              <p *ngFor="let cupid of details?.tail">
                {{cupid}}
              </p>
            </ng-template>
          </ngb-panel>
        </ngb-accordion>
      </li>
      <li class = "nav-item nav-link mt-4">
        <p class="font-weight-bold mb-0">
          Request ID:
        </p>
        <p rel="requestId">
          {{details?.requestId}}
        </p>
      </li>
      <li class = "nav-item nav-link">
        <p class="font-weight-bold mb-0">
          Date Started:
        </p>
        <p rel="created">
          {{details?.created}}
        </p>
      </li>
      <li class = "nav-item nav-link">
        <p class="font-weight-bold mb-0">
          Status:
        </p>
        <p rel="status">
          {{details?.status}}
        </p>
      </li>
      <hr/>
    </ul>
  `,
  styles: [`
  `]
})
export class RequestorComponent implements OnInit {
  @Input() details: any;

  constructor() {
  }

  ngOnInit() {
  }
}
