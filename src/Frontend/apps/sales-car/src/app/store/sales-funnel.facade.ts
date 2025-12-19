import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as SalesFunnelActions from './sales-funnel.actions';
import * as SalesFunnelSelectors from './sales-funnel.selectors';
import { CarInfo } from '@frontend/damage-sales-car';

@Injectable({
  providedIn: 'root'
})
export class SalesFunnelFacade {
  // Observables
  readonly hasInsurance$: Observable<boolean>;
  readonly carInfo$: Observable<CarInfo | null>;
  readonly isLoadingCarInfo$: Observable<boolean>;
  readonly carInfoError$: Observable<string | null>;

  constructor(private store: Store) {
    this.hasInsurance$ = this.store.select(SalesFunnelSelectors.selectHasInsurance);
    this.carInfo$ = this.store.select(SalesFunnelSelectors.selectCarInfo);
    this.isLoadingCarInfo$ = this.store.select(SalesFunnelSelectors.selectIsLoadingCarInfo);
    this.carInfoError$ = this.store.select(SalesFunnelSelectors.selectCarInfoError);
  }

  // Actions
  setInsuranceStatus(hasInsurance: boolean): void {
    this.store.dispatch(SalesFunnelActions.setInsuranceStatus({ hasInsurance }));
  }

  lookupLicensePlate(licensePlate: string): void {
    this.store.dispatch(SalesFunnelActions.lookupLicensePlate({ licensePlate }));
  }

  resetSalesFunnel(): void {
    this.store.dispatch(SalesFunnelActions.resetSalesFunnel());
  }
}
