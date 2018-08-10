import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BackendService, Ticket} from '../backend.service';

@Component({
  templateUrl: './ticket-details.component.html',
  styleUrls: ['./ticket-details.component.css']
})

export class TicketDetailsComponent implements OnInit {

  ticket: Ticket;

  constructor(private backend: BackendService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    const ticketId = +this.route.snapshot.paramMap.get('id');
    this.backend.ticket(ticketId)
      .subscribe(
        ticket => this.ticket = ticket);
  }

}
