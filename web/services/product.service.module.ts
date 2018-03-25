import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ProductFetchService} from './product.service';

@NgModule({
  declarations: [
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
  ],
  providers: [ProductFetchService]
})

export class ProductServiceModule {
}
