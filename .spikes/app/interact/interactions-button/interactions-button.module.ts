import {NgModule} from '@angular/core';
import {InteractionsButtonComponent} from './interactions-button.component';
import {ModalService} from './modal';
import {InteractionsComponent} from './interactions';

@NgModule({
  declarations: [
    InteractionsButtonComponent
  ],
  imports: [
  ],
  exports: [
    InteractionsButtonComponent
  ],
  providers: [
    ModalService,
    InteractionsComponent
  ]
})

export class InteractionsButtonModule {
}
