import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {EraseFetchService} from './fetch.service';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
  ],
  providers: [EraseFetchService]
})

export class EraseFetchModule {
}
