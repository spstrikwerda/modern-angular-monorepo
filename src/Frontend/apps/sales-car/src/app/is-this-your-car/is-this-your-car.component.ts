import { Component } from '@angular/core';
import { SalesFunnelFacade } from '../store/sales-funnel.facade';
import { RouteContent } from '@frontend/shared';
import { Observable } from 'rxjs';
import { CarInfo } from '@frontend/damage-sales-car';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-is-this-your-car',
  templateUrl: './is-this-your-car.component.html',
  styleUrls: ['./is-this-your-car.component.css'],
  standalone: false
})
export class IsThisYourCarComponent {
  carInfo$: Observable<CarInfo | null>;
  content$: Observable<RouteContent | null>;

  constructor(
    private salesFunnelFacade: SalesFunnelFacade,
    private route: ActivatedRoute
  ) {
    this.carInfo$ = this.salesFunnelFacade.carInfo$;
    this.content$ = this.route.data.pipe(map(d => d['content']));
  }

  // Content is preloaded via RouteContentResolver attached to the route
}
