import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowseFetchService} from './fetch.service';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
  ],
  providers: [BrowseFetchService]
})

export class BrowseFetchModule {
}
