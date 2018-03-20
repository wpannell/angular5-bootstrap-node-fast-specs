import {NgModule} from '@angular/core';
import {BackComponent} from './back.component';
import {LocationModule} from './location';

@NgModule({
  declarations: [
    BackComponent
  ],
  imports: [
    LocationModule
  ],
  exports: [
    BackComponent
  ],
  providers: []
})

export class BackModule {
}
