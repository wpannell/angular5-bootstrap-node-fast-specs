import {NgModule} from '@angular/core';
import {GridModule} from './grid';
import {BrowseFetchModule} from './fetch';

import {BrowseComponent} from './browse.component';
import {NavigatorModule} from '../../navigate';

@NgModule({
  declarations: [
    BrowseComponent
  ],
  imports: [
    GridModule,
    BrowseFetchModule,
    NavigatorModule
  ],
  exports: [
    BrowseComponent
  ],
  providers: []
})

export class BrowseModule {
}
