import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button 
      class="btn" 
      (click)="handleClick()"
      type="button">
      {{ title }}
    </button>
  `,
  styles: [`
    .btn {
      padding: 12px 24px;
      font-size: 16px;
      font-weight: 600;
      border: 2px solid #007bff;
      background-color: #007bff;
      color: white;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s ease;
      min-width: 120px;
    }

    .btn:hover {
      background-color: #0056b3;
      border-color: #0056b3;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(0, 123, 255, 0.3);
    }

    .btn:active {
      transform: translateY(0);
      box-shadow: 0 2px 4px rgba(0, 123, 255, 0.2);
    }

    .btn:focus {
      outline: none;
      box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.4);
    }
  `]
})
export class ButtonComponent {
  @Input() title = '';
  @Input() route = '';
  @Output() buttonClick = new EventEmitter<void>();

  constructor(private router: Router) {}

  handleClick() {
    this.buttonClick.emit();
    if (this.route) {
      this.router.navigate([this.route]);
    }
  }
}
