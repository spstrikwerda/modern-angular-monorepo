import { CarInfo } from '@frontend/damage-sales-car';

export type { CarInfo };

export interface SalesFunnelState {
  hasInsurance: boolean;
  carInfo: CarInfo | null;
  isLoadingCarInfo: boolean;
  carInfoError: string | null;
}

export const initialState: SalesFunnelState = {
  hasInsurance: false,
  carInfo: null,
  isLoadingCarInfo: false,
  carInfoError: null
};
