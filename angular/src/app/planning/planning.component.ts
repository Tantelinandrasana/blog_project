
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { EventService, Event } from '../event.service';

@Component({
  selector: 'app-planning',
  standalone: true, // Raha standalone
  imports: [  // // Ampidirina eto ny modules
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent {
  // Variables ho an'ny formulaire
  title: string = '';
  date: string = '';
  description: string = '';
  events: Event[] = [];

  constructor(private eventService: EventService) {
    this.loadEvents();
  }

  loadEvents(): void {
    this.events = this.eventService.getEvents();
  }

  addEvent(): void {
    if (this.title && this.date) {
      const newEvent: Event = {
        title: this.title,
        date: new Date(this.date),
        description: this.description
      };

      this.eventService.addEvent(newEvent);
      // Miverina mameno ny lisitra
      this.loadEvents();
      // Madio ny formulaire
      this.title = '';
      this.date = '';
      this.description = '';
    } else {
      alert('Mety tsy feno ny saha ilaina (Title sy Date)');
    }
  }
}