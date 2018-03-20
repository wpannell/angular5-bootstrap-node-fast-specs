import { Component } from '@angular/core';

@Component({
  selector: 'privacy-portal-dpo',
  template: `
    <div class="app-content container">
      <app-header></app-header>
      <router-outlet></router-outlet>
    </div>
  `,
    styles: [`
      * {
        font-family: AmericanSansLight, Arial, serif;
      }
      head, body, .app-content {
        height: 100vh;
        width: 100vw;
      }
    `]
})

export class AppComponent {
  title = 'Privacy Portal DPO';
}
