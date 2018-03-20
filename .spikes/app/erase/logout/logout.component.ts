import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'logout',
  template:
  `
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <h3 class="font-weight-bold" rel="dpo">
          Welcome {{dpo}}
            <a class="nav-link d-inline" href="javascript:void(0)">
              Logout
            </a>
        </h3>
      </li>
    </ul>
  `,
  styles: [`
  `]
})
export class LogoutComponent implements OnInit {
  @Input() dpo: string;
  constructor() {
  }

  ngOnInit() {
  }
}
