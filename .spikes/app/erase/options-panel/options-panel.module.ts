import {NgModule} from '@angular/core';
import {OptionsPanelComponent} from './options-panel.component';
import {InteractionsButtonModule} from '../../interact/interactions-button';

@NgModule({
  declarations: [
    OptionsPanelComponent
  ],
  imports: [
    InteractionsButtonModule
  ],
  exports: [
    OptionsPanelComponent
  ],
  providers: []
})

export class OptionsPanelModule {
}
