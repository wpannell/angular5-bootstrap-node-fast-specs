import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NgbModule, NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import {RequestorComponent} from './requestor.component';

@NgModule({
  declarations: [
    RequestorComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    RequestorComponent
  ],
  providers: [
    NgbAccordionConfig
  ]
})

export class RequestorModule {
}
