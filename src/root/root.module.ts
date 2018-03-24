import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {RootComponent} from './root.component';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule
  ],
  exports: [RootComponent],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule {
}
