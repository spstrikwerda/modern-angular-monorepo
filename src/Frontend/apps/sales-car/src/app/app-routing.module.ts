import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteContentResolver } from '@frontend/shared';
import { StartComponent } from './start/start.component';
import { CarInsuredComponent } from './car-insured/car-insured.component';
import { LicensePlateComponent } from './license-plate/license-plate.component';
import { IsThisYourCarComponent } from './is-this-your-car/is-this-your-car.component';
import { ZipCodeComponent } from './zip-code/zip-code.component';
import { ThanksComponent } from './thanks/thanks.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartComponent, resolve: { content: RouteContentResolver }, runGuardsAndResolvers: 'always' },
  { path: 'car-insured', component: CarInsuredComponent, resolve: { content: RouteContentResolver }, runGuardsAndResolvers: 'always' },
  { path: 'license-plate', component: LicensePlateComponent, resolve: { content: RouteContentResolver }, runGuardsAndResolvers: 'always' },
  { path: 'is-this-your-car', component: IsThisYourCarComponent, resolve: { content: RouteContentResolver }, runGuardsAndResolvers: 'always' },
  { path: 'zip-code', component: ZipCodeComponent, resolve: { content: RouteContentResolver }, runGuardsAndResolvers: 'always' },
  { path: 'thanks', component: ThanksComponent, resolve: { content: RouteContentResolver }, runGuardsAndResolvers: 'always' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
