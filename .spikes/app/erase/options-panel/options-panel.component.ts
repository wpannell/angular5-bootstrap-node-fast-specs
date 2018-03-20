import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'options-panel',
  template:
  `
    <ul class = "nav flex-column">
      <hr/>
      <li class = "nav-item nav-link">
        <p class="font-weight-bold mb-0">
          DPO:
        </p>
        <p rel=assignTo>
          {{details?.assignTo}}
        </p>
      <li class = "nav-item nav-link">
        <div class="btn-toolbar mb-2 mb-md-0">
          <div class="btn-group mr-2">
            <button class="btn btn-sm btn-primary">Assign Me</button>
          </div>
        </div>
      </li>
      <li class = "nav-item nav-link">
        <interactions-button></interactions-button>
      </li>
      <li class = "nav-item">
        <a class = "nav-link" href = "javascript:void(0)">
          Add Internal Note
        </a>
      </li>
      <hr/>
    </ul>
  `,
  styles: [`
  `]
})
export class OptionsPanelComponent implements OnInit {
  @Input() details: any;

  constructor() {
  }

  ngOnInit() {
  }
}
