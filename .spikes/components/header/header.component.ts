import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
      <div class="row d-block p-1 bg-link"></div>
      <div class="row" style="position:relative; margin-top:3px;">
        <div class="col-xs-8">
          <img rel="logo-left" src="../../assets/img/aa-logo-horizontal-sm.png"/>
        </div>
        <div class="col-xs-4">
          <img  rel="logo-right" src="../../assets/img/oneworld.png" width="21px" style="position:absolute; right:0;"/>
        </div>
      </div>
      <div class="row d-block p-1 bg-link"></div>
      <div class="row d-block p-3 bg-primary"></div>
      <div class="row d-block p-1 bg-link"></div>
    </header>
  `,
  styles: [`
    * {
      font-family: AmericanSansLight, Arial, serif;
    }
  `]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
