import { Injectable } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { SitecoreGraphQLResponse, RouteContent } from '../models/route-content.model';

@Injectable({
  providedIn: 'root'
})
export class GraphQLService {
  private readonly apiUrl = '/api/graphql';

  constructor() {}

  query<T>(query: string, variables?: Record<string, any>): Observable<T> {
    return from(
      fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          variables
        })
      }).then(response => response.json())
    );
  }

  getRouteContent(routePath: string): Observable<RouteContent> {
    const query = `
      query GetRouteContent($path: String!) {
        item(path: $path) {
          id
          name
          path
          fields {
            heading {
              value
            }
            subheading {
              value
            }
            paragraph {
              value
            }
            buttons {
              value
            }
          }
        }
      }
    `;

    return this.query<SitecoreGraphQLResponse>(query, { path: routePath }).pipe(
      map(response => this.mapToRouteContent(response, routePath))
    );
  }

  private mapToRouteContent(response: SitecoreGraphQLResponse, route: string): RouteContent {
    const item = response.data?.item;
    if (!item) {
      return this.getDefaultContent(route);
    }

    return {
      route,
      heading: item.fields?.heading?.value || '',
      subheading: item.fields?.subheading?.value,
      paragraph: item.fields?.paragraph?.value,
      buttons: item.fields?.buttons?.value || []
    };
  }

  private getDefaultContent(route: string): RouteContent {
    return {
      route,
      heading: 'Loading...',
      buttons: []
    };
  }
}
