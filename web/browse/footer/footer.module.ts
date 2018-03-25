import {NgModule} from '@angular/core';
import {FooterComponent} from './footer.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [FooterComponent],
  providers: []
})
export class FooterModule {
}
