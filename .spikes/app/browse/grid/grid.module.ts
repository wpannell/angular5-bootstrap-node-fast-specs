import {NgModule} from '@angular/core';
import {AgGridModule} from 'ag-grid-angular/main';
import {GridComponent} from './grid.component';

@NgModule({
  declarations: [
    GridComponent
  ],
  imports: [
    AgGridModule.withComponents([])
  ],
  exports: [
    GridComponent
  ],
  providers: []
})

export class GridModule {
}
