import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'audit-trail',
  template:
  `
    <main role="main" class="col-md-8 ml-sm-auto col-lg-10 pt-3 px-4">
      <div class="flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">
        <h1 class="h2" rel="title">{{title}}</h1>
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group mr-2">
            <button class="btn btn-sm btn-primary" rel="make-decision">Make Decision</button>
          </div>
        </div>
      </div>
      <div id="audit-trail" class="list-group" style="height: 60vh; position: relative; overflow-y:scroll">
        <a href="#" rel="post" *ngFor="let post of details?.history; let isFirst = first; let isOdd = odd; let isEven = even;"
           [class.active]="isFirst"
           [class.list-group-item-secondary]="isEven && !isFirst"
           [class.list-group-item-light]="isOdd"
           class="list-group-item list-group-item-action flex-column align-items-start mb-4">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1" rel="post-title">{{post?.title}}</h5>
            <small rel="timestamp">{{post?.timestamp}}</small>
          </div>
          <p class="mb-1" rel="message">{{post?.message}}</p>
          <small rel="created-by">{{post?.createdBy}}</small>
        </a>
      </div>
      <div data-spy="scroll" data-target="#audit-trail" data-offset="0"></div>
    </main>
  `,
  styles: [`
  `]
})
export class AuditTrailComponent {
  @Input() title: string;
  @Input() details: any;

  constructor() {
  }
}
