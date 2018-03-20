import {NgModule} from '@angular/core';
import {EraseComponent} from './erase.component';
import {HeaderModule} from './header';
import {BackModule} from './back';
import {LogoutModule} from './logout';
import {AuditTrailModule} from './audit-trail';
import {EraseFetchModule} from './fetch';
import {RequestorModule} from './requestor';
import {OptionsPanelModule} from './options-panel';

@NgModule({
  declarations: [
    EraseComponent
  ],
  imports: [
    HeaderModule,
    BackModule,
    LogoutModule,
    AuditTrailModule,
    EraseFetchModule,
    RequestorModule,
    OptionsPanelModule
  ],
  exports: [
    EraseComponent
  ],
  providers: []
})

export class EraseModule {
}
