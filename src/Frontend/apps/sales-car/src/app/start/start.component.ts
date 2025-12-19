import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css'],
  standalone: false
})
export class StartComponent {
  constructor(private router: Router) {}

  navigateToMain() {
    this.router.navigate(['/main']);
  }
}
