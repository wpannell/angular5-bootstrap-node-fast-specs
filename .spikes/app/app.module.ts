import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { RoutingModule } from '../router';
import { HeaderModule } from '../components/header';
import { BrowseModule } from './browse';
import { EraseModule } from './erase';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HeaderModule,
    BrowserModule,
    RoutingModule,
    BrowseModule,
    EraseModule,
    NgbModule.forRoot()
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
