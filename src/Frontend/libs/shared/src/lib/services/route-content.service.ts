import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { GraphQLService } from './graphql.service';
import { RouteContent } from '../models/route-content.model';

@Injectable({
  providedIn: 'root'
})
export class RouteContentService {
  private contentSubject = new BehaviorSubject<RouteContent | null>(null);
  public content$: Observable<RouteContent | null> = this.contentSubject.asObservable();

  constructor(
    private graphQLService: GraphQLService
  ) {}

  // Route listener removed; use RouteContentResolver to preload content per route
  private initializeRouteListener(): void {}

  loadContentForRoute(routePath: string): Observable<RouteContent> {
    return this.graphQLService
      .getRouteContent(routePath)
      .pipe(tap((content) => this.contentSubject.next(content)));
  }

  getCurrentContent(): RouteContent | null {
    return this.contentSubject.value;
  }
}
