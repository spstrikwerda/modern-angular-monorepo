import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { SalesFunnelFacade } from '../store/sales-funnel.facade';
import { RouteContent } from '@frontend/shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-license-plate',
  templateUrl: './license-plate.component.html',
  styleUrls: ['./license-plate.component.css'],
  standalone: false
})
export class LicensePlateComponent {
  licensePlate = '';
  isLoading$: Observable<boolean>;
  content$: Observable<RouteContent | null>;

  constructor(
    private router: Router,
    private salesFunnelFacade: SalesFunnelFacade,
    private route: ActivatedRoute
  ) {
    this.isLoading$ = this.salesFunnelFacade.isLoadingCarInfo$;
    this.content$ = this.route.data.pipe(map(d => d['content']));
  }

  // Content is preloaded via RouteContentResolver attached to the route

  submitLicensePlate() {
    if (this.licensePlate) {
      this.salesFunnelFacade.lookupLicensePlate(this.licensePlate);
      // Navigate to the is-this-your-car page after dispatching
      setTimeout(() => {
        this.router.navigate(['/is-this-your-car']);
      }, 1100); // Wait slightly longer than the API delay
    }
  }
}
