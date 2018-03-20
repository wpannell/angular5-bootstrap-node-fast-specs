import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'erase-header',
  template:
  `
    <nav class="navbar navbar-light sticky-top bg-white flex-md-nowrap p-0">
      <ng-content></ng-content>
    </nav>
  `,
  styles: [`
  `]
})
export class HeaderComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
