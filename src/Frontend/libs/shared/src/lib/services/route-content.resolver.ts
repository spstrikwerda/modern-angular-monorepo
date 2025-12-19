import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GraphQLService } from './graphql.service';
import { RouteContent } from '../models/route-content.model';

@Injectable({ providedIn: 'root' })
export class RouteContentResolver implements Resolve<RouteContent> {
  constructor(private graphQLService: GraphQLService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RouteContent> {
    // Use full URL (e.g. '/start') so MSW handlers match correctly
    const routePath = state.url;
    return this.graphQLService.getRouteContent(routePath);
  }
}
