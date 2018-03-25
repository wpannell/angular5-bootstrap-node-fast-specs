import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'header',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#" rel="header-home"><i class="fa fa-home"></i> Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mr-auto">
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#" rel="header-cart">View Cart <i class="fa fa-shopping-cart"></i></a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" rel="header-checkout">Checkout <i class="fa fa-credit-card"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  `,
  styles: [`
    head, body, .app-content {
      height: 100vh;
      width: 100vw;
    }
  `]

})

export class HeaderComponent {
}
