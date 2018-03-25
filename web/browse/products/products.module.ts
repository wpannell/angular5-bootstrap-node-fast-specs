import {NgModule} from '@angular/core';
import {ProductsComponent} from './products.component';
import {BrowserModule} from '@angular/platform-browser';
import {TileModule} from './tile';

@NgModule({
  declarations: [
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    TileModule
  ],
  exports: [ProductsComponent],
  providers: []
})
export class ProductsModule {
}
