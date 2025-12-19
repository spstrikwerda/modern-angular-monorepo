import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteContent } from '@frontend/shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-zip-code',
  templateUrl: './zip-code.component.html',
  styleUrls: ['./zip-code.component.css'],
  standalone: false
})
export class ZipCodeComponent {
  zipCode = '';
  content$: Observable<RouteContent | null>;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.content$ = this.route.data.pipe(map(d => d['content']));
  }

  // Content is preloaded via RouteContentResolver attached to the route

  submitZipCode() {
    if (this.zipCode) {
      this.router.navigate(['/thanks']);
    }
  }
}
