import {Component} from '@angular/core';

@Component({
  selector: 'test',
  template: `
      <h1>hey!</h1>
  `,
  styles: [`
    head, body, .app-content {
      height: 100vh;
      width: 100vw;
    }
  `]
})

export class TestComponent {
}
