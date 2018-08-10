import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type User = {
  id: number;
  name: string;
};

export type Ticket = {
  id: number;
  description: string;
  assigneeId: number;
};

@Injectable()
export class BackendService {
  constructor(private http: HttpClient) { }

  tickets() {
    return this.http.get<Ticket[]>('/api/tickets');
  }

  ticket(id: number) {
    return this.http.get<Ticket>(`/api/ticket/${id}`);
  }

  users() {
    return this.http.get<User[]>('/api/users');
  }

  user(id: number) {
    return this.http.get<User>(`/user/${id}`);
  }

  newTicket(payload: {description: string}) {
    return this.http.post('/api/tickets', payload);
  }

  assign(ticketId: number, userId: number) {
    return this.http.post('/api/assign', {ticketId, userId});
  }

  complete(ticketId: number, completed: boolean) {
    return this.http.post('/api/complete', {ticketId, completed});
  }
}
