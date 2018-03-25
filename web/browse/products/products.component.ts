import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'products',
  template: `
    <main role="main">
      <div class="fluid-container">
        <div class="row">
          <div class="col">
            <tile></tile>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <tile></tile>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <tile></tile>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <tile></tile>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <tile></tile>
          </div>
        </div>
      </div>
    </main>  `,
  styles: [`
    head, body, .app-content {
      height: 100vh;
      width: 100vw;
    }
  `]

})

export class ProductsComponent {
}
