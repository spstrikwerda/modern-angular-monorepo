import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  standalone: false
})
export class MainComponent {
  carModel = '';
  carYear = '';

  constructor(private router: Router) {}

  submitCarInfo() {
    if (this.carModel && this.carYear) {
      this.router.navigate(['/thanks']);
    }
  }
}
