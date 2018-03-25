import {NgModule} from '@angular/core';
import {SidenavComponent} from './sidenav.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [SidenavComponent],
  providers: []
})
export class SidenavModule {
}
