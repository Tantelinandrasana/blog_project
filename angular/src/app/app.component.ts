import { Component } from '@angular/core';
import { PlanningComponent } from './planning/planning.component';

@Component({
  selector: 'app-root',
  // standalone: true,
  imports: [PlanningComponent], //reny no atao hoe module 
  template: `<app-planning></app-planning>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent { }
