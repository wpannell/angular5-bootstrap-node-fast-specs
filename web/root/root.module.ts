import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {RootComponent} from './root.component';
import {BrowseModule} from '../browse';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    BrowseModule
  ],
  exports: [RootComponent],
  providers: [],
  bootstrap: [RootComponent]
})
export class RootModule {
}
