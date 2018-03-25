import {NgModule} from '@angular/core';
import {BrowseComponent} from './browse.component';
import {HeaderModule} from './header';
import {BrowserModule} from '@angular/platform-browser';
import {SidenavModule} from './sidenav';
import {FooterModule} from './footer';
import {ProductsModule} from './products';

@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    SidenavModule,
    FooterModule,
    ProductsModule
  ],
  exports: [BrowseComponent],
  providers: []
})
export class BrowseModule {
}
