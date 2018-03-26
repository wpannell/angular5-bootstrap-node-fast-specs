import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {TestComponent} from './test.component';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [TestComponent],
  providers: []
})
export class TestModule {
}
