import {Component, OnInit} from '@angular/core';
import {ProductFetchService} from '../services/product.service';

@Component({
  selector: 'root',
  template: `
    <browse></browse>
  `,
  styles: [`
    head, body, .app-content {
      height: 100vh;
      width: 100vw;
    }
  `]

})

export class RootComponent implements OnInit {
  ngOnInit(): any {
  }
}
