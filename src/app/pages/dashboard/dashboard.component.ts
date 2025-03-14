import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true, // ✅ Es standalone porque usa imports
  imports: [RouterOutlet],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // ✅ "styleUrls" en plural
})
export default class DashboardComponent {}
