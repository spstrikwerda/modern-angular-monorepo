import { Component } from '@angular/core';
import { RouteContent } from '@frontend/shared';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-thanks',
  templateUrl: './thanks.component.html',
  styleUrls: ['./thanks.component.css'],
  standalone: false
})
export class ThanksComponent {
  content$: Observable<RouteContent | null>;

  constructor(private route: ActivatedRoute) {
    this.content$ = this.route.data.pipe(map(d => d['content']));
  }

  // Content is preloaded via RouteContentResolver attached to the route
}
 
