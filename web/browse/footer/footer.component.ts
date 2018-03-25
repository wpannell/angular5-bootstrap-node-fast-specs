import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'footer-bar',
  template: `
    <footer class="footer">
      <div class="container">
        <span class="text-muted" rel="footer-text">
          <p class="text-center">
            <i class="fa fa-copyright"></i>2000-2018 Cementz, LLC. All Rights Reserved.
          </p></span>
      </div>
    </footer>
  `,
  styles: [`
    head, body, .app-content {
      height: 100vh;
      width: 100vw;
    }
  `]

})

export class FooterComponent {
}
