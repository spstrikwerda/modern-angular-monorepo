import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { CarInsuredComponent } from './car-insured/car-insured.component';
import { LicensePlateComponent } from './license-plate/license-plate.component';
import { ThanksComponent } from './thanks/thanks.component';
import { ZipCodeComponent } from './zip-code/zip-code.component';
import { IsThisYourCarComponent } from './is-this-your-car/is-this-your-car.component';
import { ButtonComponent, ButtonContainerComponent } from '@frontend/shared';
import { OverviewComponent } from '@frontend/damage-sales-car';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { salesFunnelReducer } from './store/sales-funnel.reducer';
import { SalesFunnelEffects } from './store/sales-funnel.effects';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    CarInsuredComponent,
    LicensePlateComponent,
    ZipCodeComponent,
    IsThisYourCarComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ButtonComponent,
    ButtonContainerComponent,
    OverviewComponent,
    StoreModule.forRoot({ salesFunnel: salesFunnelReducer }),
    EffectsModule.forRoot([SalesFunnelEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
