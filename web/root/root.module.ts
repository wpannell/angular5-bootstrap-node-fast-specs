import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {RootComponent} from './root.component';
import {BrowseModule} from '../browse';
import {RoutingModule} from '../router';
import {APP_BASE_HREF} from '@angular/common';
import {TestModule} from '../test/test.module';

@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    BrowseModule,
    RoutingModule,
    TestModule
  ],
  exports: [RootComponent],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [RootComponent]
})
export class RootModule {
}
