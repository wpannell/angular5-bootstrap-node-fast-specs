import {Component, OnInit} from '@angular/core';
import {LocationService} from './location';

@Component({
  selector: 'back',
  template:
  `
    <a
      class="navbar-brand col-sm-3 col-md-2 mr-0" href="javascript:void(0)" (click)="back()">
      <h3 class="font-weight-bold">
        Back
      </h3>
    </a>
  `,
  styles: [`
  `]
})
export class BackComponent {
  constructor(private locator: LocationService) {
  }

  back() {
    this.locator.back();
  }
}
