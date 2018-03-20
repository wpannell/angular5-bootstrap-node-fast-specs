import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuditTrailComponent} from './audit-trail.component';

@NgModule({
  declarations: [
    AuditTrailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AuditTrailComponent
  ],
  providers: []
})

export class AuditTrailModule {
}
