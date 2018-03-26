import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {routes} from './routes';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class RoutingModule {}
