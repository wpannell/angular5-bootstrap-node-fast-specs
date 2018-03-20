import {BrowseComponent} from '../app/browse';
import {Routes} from '@angular/router';
import {EraseComponent} from '../app/erase';

export const routes: Routes = [
  {path: '', component: BrowseComponent},
  {path: 'erase/:id', component: EraseComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
