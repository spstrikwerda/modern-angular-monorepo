import { createReducer, on } from '@ngrx/store';
import { initialState, SalesFunnelState } from './sales-funnel.state';
import * as SalesFunnelActions from './sales-funnel.actions';

export const salesFunnelReducer = createReducer(
  initialState,
  
  // Handle insurance status
  on(SalesFunnelActions.setInsuranceStatus, (state, { hasInsurance }) => ({
    ...state,
    hasInsurance
  })),
  
  // Handle license plate lookup
  on(SalesFunnelActions.lookupLicensePlate, (state) => ({
    ...state,
    isLoadingCarInfo: true,
    carInfoError: null
  })),
  
  on(SalesFunnelActions.lookupLicensePlateSuccess, (state, { carInfo }) => ({
    ...state,
    carInfo,
    isLoadingCarInfo: false,
    carInfoError: null
  })),
  
  on(SalesFunnelActions.lookupLicensePlateFailure, (state, { error }) => ({
    ...state,
    isLoadingCarInfo: false,
    carInfoError: error
  })),
  
  // Handle reset
  on(SalesFunnelActions.resetSalesFunnel, () => initialState)
);
