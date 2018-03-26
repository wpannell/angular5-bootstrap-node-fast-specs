import {Routes} from '@angular/router';
import {BrowseComponent} from '../browse/';
import {TestComponent} from '../test/';

export const routes: Routes = [
  {path: '', component: BrowseComponent},
  {path: 'test', component: TestComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
