import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'lib-button-container',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="button-container">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .button-container {
      display: flex;
      gap: 20px;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 20px;
    }
  `]
})
export class ButtonContainerComponent {}
