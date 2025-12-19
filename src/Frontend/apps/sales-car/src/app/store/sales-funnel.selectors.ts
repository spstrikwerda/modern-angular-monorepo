import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SalesFunnelState } from './sales-funnel.state';

export const selectSalesFunnelState = createFeatureSelector<SalesFunnelState>('salesFunnel');

export const selectHasInsurance = createSelector(
  selectSalesFunnelState,
  (state) => state.hasInsurance
);

export const selectCarInfo = createSelector(
  selectSalesFunnelState,
  (state) => state.carInfo
);

export const selectIsLoadingCarInfo = createSelector(
  selectSalesFunnelState,
  (state) => state.isLoadingCarInfo
);

export const selectCarInfoError = createSelector(
  selectSalesFunnelState,
  (state) => state.carInfoError
);
