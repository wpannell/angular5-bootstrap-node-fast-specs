import {NgModule} from '@angular/core';
import {HeaderComponent} from './header.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [HeaderComponent],
  providers: []
})
export class HeaderModule {
}
