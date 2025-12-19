import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, delay, catchError } from 'rxjs/operators';
import * as SalesFunnelActions from './sales-funnel.actions';
import { CarInfo } from './sales-funnel.state';

@Injectable()
export class SalesFunnelEffects {
  
  lookupLicensePlate$ = createEffect(() =>
    this.actions$.pipe(
      ofType(SalesFunnelActions.lookupLicensePlate),
      delay(1000), // Simulate API delay
      map(({ licensePlate }) => {
        // Dummy API response - simulate fetching car data
        const dummyCarInfo: CarInfo = {
          licensePlate: licensePlate,
          make: 'Toyota',
          model: 'Camry',
          fuelType: 'Hybrid',
          trimLevel: 'XLE Premium'
        };
        
        return SalesFunnelActions.lookupLicensePlateSuccess({ carInfo: dummyCarInfo });
      }),
      catchError((error) => 
        of(SalesFunnelActions.lookupLicensePlateFailure({ 
          error: 'Failed to lookup license plate' 
        }))
      )
    )
  );

  constructor(private actions$: Actions) {}
}
