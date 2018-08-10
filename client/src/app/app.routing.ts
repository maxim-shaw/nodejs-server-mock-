import {Routes} from '@angular/router';
import {TicketsComponent} from './tickets/tickets.component';
import {PageNotFoundComponent} from './NotFound/page-not-found.component';

export const appRoutes: Routes = [
  { path: '', component: TicketsComponent },
  { path: '**', component: PageNotFoundComponent }
];
