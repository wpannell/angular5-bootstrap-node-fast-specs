import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'decide',
  template:
  `
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group mr-2">
        <button class="btn btn-sm btn-primary">Decide</button>
      </div>
    </div>
  `,
  styles: [`
  `]
})
export class DecideComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
