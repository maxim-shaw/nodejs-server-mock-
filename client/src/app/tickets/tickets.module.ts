import {NgModule} from '@angular/core';
import {TicketsComponent} from './tickets.component';
import {CommonModule} from '@angular/common';
import {ticketRouting} from './tickets.routing';
import {TicketDetailsComponent} from './ticket-details.component';

@NgModule({
  declarations: [
    TicketsComponent,
    TicketDetailsComponent
  ],
  imports: [ticketRouting, CommonModule]
})

export class TicketsModule {}
