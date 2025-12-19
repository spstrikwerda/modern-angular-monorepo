export interface RouteContent {
  route: string;
  heading: string;
  subheading?: string;
  paragraph?: string;
  buttons?: ButtonContent[];
  fields?: Record<string, string>;
}

export interface ButtonContent {
  title: string;
  route: string;
  action?: string;
}

export interface SitecoreGraphQLResponse {
  data: {
    item: {
      id: string;
      name: string;
      path: string;
      fields: {
        heading: { value: string };
        subheading?: { value: string };
        paragraph?: { value: string };
        buttons?: {
          value: ButtonContent[];
        };
      };
    };
  };
}
