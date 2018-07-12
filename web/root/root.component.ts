import {Component} from '@angular/core';

@Component({
  selector: 'root',
  template: `
    <h1>hello world</h1>
  `,
  styles: [`
    head, body, .app-content {
      height: 100vh;
      width: 100vw;
    }
  `]

})

export class RootComponent {
}
