import {NgModule} from '@angular/core';
import {BrowseComponent} from './browse.component';
import {HeaderModule} from './header';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule
  ],
  exports: [BrowseComponent],
  providers: []
})
export class BrowseModule {
}
