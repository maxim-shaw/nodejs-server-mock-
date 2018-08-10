import {RouterModule, Routes} from '@angular/router';
import {TicketsComponent} from './tickets.component';
import {TicketDetailsComponent} from './ticket-details.component';
import {ModuleWithProviders} from '@angular/core';

const ticketRouts: Routes = [
  { path: 'tickets',
      children: [
        { path: '', component: TicketsComponent },
        { path: ':id', component: TicketDetailsComponent }
      ]
  }
];

export const ticketRouting: ModuleWithProviders  = RouterModule.forChild(ticketRouts);
