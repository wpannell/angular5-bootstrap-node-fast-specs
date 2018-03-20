import {Component, OnInit} from '@angular/core';
import {ModalService} from './modal';
import {InteractionsComponent} from './interactions';

@Component({
  selector: 'interactions-button',
  template:
  `
    <div class="btn-toolbar mb-2 mb-md-0">
      <div class="btn-group mr-2">
        <button class="btn btn-sm btn-primary">+ Interaction</button>
      </div>
    </div>
  `,
  styles: [`
  `]
})
export class InteractionsButtonComponent {
  constructor(private modal: ModalService, private interactions: InteractionsComponent) {
  }

  open() {
    this.modal.open(this.interactions);
  }
}
