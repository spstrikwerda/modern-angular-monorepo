import { createAction, props } from '@ngrx/store';
import { CarInfo } from './sales-funnel.state';

// Insurance status actions
export const setInsuranceStatus = createAction(
  '[Car Insured Page] Set Insurance Status',
  props<{ hasInsurance: boolean }>()
);

// License plate lookup actions
export const lookupLicensePlate = createAction(
  '[License Plate Page] Lookup License Plate',
  props<{ licensePlate: string }>()
);

export const lookupLicensePlateSuccess = createAction(
  '[License Plate API] Lookup License Plate Success',
  props<{ carInfo: CarInfo }>()
);

export const lookupLicensePlateFailure = createAction(
  '[License Plate API] Lookup License Plate Failure',
  props<{ error: string }>()
);

// Reset actions
export const resetSalesFunnel = createAction(
  '[Sales Funnel] Reset'
);
