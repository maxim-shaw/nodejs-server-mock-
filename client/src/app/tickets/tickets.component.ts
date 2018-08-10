import {Component, OnInit} from '@angular/core';
import {BackendService, Ticket} from '../backend.service';
import {Observable} from 'rxjs/Observable';

@Component({
  templateUrl: './tickets.component.html'
})

export class TicketsComponent implements OnInit {

  tickets: Observable<Ticket[]>;
  constructor(private backend: BackendService) {}

  ngOnInit() {
    this.tickets = this.backend.tickets();
  }
}
