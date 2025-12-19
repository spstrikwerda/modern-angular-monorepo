import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarInfo } from '../models/car-info.model';

@Component({
  selector: 'lib-overview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="overview-container">
      <h3>Car Information</h3>
      <div *ngIf="carInfo" class="car-details">
        <div class="detail-row">
          <span class="label">License Plate:</span>
          <span class="value">{{ carInfo.licensePlate }}</span>
        </div>
        <div class="detail-row">
          <span class="label">Make:</span>
          <span class="value">{{ carInfo.make }}</span>
        </div>
        <div class="detail-row">
          <span class="label">Model:</span>
          <span class="value">{{ carInfo.model }}</span>
        </div>
        <div class="detail-row">
          <span class="label">Fuel Type:</span>
          <span class="value">{{ carInfo.fuelType }}</span>
        </div>
        <div class="detail-row">
          <span class="label">Trim Level:</span>
          <span class="value">{{ carInfo.trimLevel }}</span>
        </div>
      </div>
      <div *ngIf="!carInfo" class="no-data">
        <p>No car information available</p>
      </div>
    </div>
  `,
  styles: [`
    .overview-container {
      max-width: 600px;
      margin: 0 auto;
      padding: 30px;
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    h3 {
      color: #2c3e50;
      font-size: 24px;
      margin-bottom: 25px;
      text-align: center;
      border-bottom: 2px solid #3498db;
      padding-bottom: 10px;
    }

    .car-details {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }

    .detail-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      background: #f8f9fa;
      border-radius: 8px;
      transition: background-color 0.2s;
    }

    .detail-row:hover {
      background: #e9ecef;
    }

    .label {
      font-weight: 600;
      color: #555;
      font-size: 16px;
    }

    .value {
      color: #2c3e50;
      font-size: 16px;
      font-weight: 500;
    }

    .no-data {
      text-align: center;
      padding: 40px;
      color: #95a5a6;
    }

    .no-data p {
      font-size: 18px;
      margin: 0;
    }
  `]
})
export class OverviewComponent {
  @Input() carInfo: CarInfo | null = null;
}
