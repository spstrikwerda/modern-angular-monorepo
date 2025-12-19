import { Component } from '@angular/core';
import { SalesFunnelFacade } from '../store/sales-funnel.facade';
import { RouteContent } from '@frontend/shared';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-car-insured',
  templateUrl: './car-insured.component.html',
  styleUrls: ['./car-insured.component.css'],
  standalone: false
})
export class CarInsuredComponent {
  content$: Observable<RouteContent | null>;

  constructor(
    private salesFunnelFacade: SalesFunnelFacade,
    private route: ActivatedRoute
  ) {
    this.content$ = this.route.data.pipe(map(d => d['content']));
  }

  // Content is preloaded via RouteContentResolver attached to the route

  onNoClick() {
    this.salesFunnelFacade.setInsuranceStatus(false);
  }

  onYesClick() {
    this.salesFunnelFacade.setInsuranceStatus(true);
  }
}
