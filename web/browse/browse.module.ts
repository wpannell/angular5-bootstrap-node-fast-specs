import {NgModule} from '@angular/core';
import {BrowseComponent} from './browse.component';
import {HeaderModule} from './header';
import {BrowserModule} from '@angular/platform-browser';
import {SidenavModule} from './sidenav';

@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    SidenavModule
  ],
  exports: [BrowseComponent],
  providers: []
})
export class BrowseModule {
}
