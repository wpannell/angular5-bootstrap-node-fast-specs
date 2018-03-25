import {NgModule} from '@angular/core';
import {TileComponent} from './tile.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    TileComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [TileComponent],
  providers: []
})
export class TileModule {
}
