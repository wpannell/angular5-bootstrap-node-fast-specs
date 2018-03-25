import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {RootComponent} from './root.component';
import {ProductServiceModule} from './product.service.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ProductServiceModule
  ],
  exports: [RootComponent],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule {
}
