import { Injectable } from '@angular/core';

export interface Event {
  title: string;
  date: Date;
  description?: string; // fanampiny raha misy
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private events: Event[] = [];

  constructor() { }

  getEvents(): Event[] {
    return this.events;
  }

  addEvent(event: Event): void {
    this.events.push(event);
  }
}