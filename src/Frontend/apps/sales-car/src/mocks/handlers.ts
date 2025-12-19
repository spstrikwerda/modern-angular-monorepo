import { http, HttpResponse, delay } from 'msw';

const routeContentMap: Record<string, any> = {
  '/start': {
    data: {
      item: {
        id: 'start-page-id',
        name: 'Start Page',
        path: '/start',
        fields: {
          heading: {
            value: 'Welcome to Car Insurance Sales'
          },
          paragraph: {
            value: 'Get started with your car insurance quote in just a few simple steps.'
          },
          buttons: {
            value: [
              {
                title: 'Get Started',
                route: '/car-insured'
              }
            ]
          }
        }
      }
    }
  },
  '/car-insured': {
    data: {
      item: {
        id: 'car-insured-page-id',
        name: 'Car Insured Page',
        path: '/car-insured',
        fields: {
          heading: {
            value: 'Is Your Car Insured?'
          },
          paragraph: {
            value: 'Please let us know if your car is currently insured.'
          },
          buttons: {
            value: [
              {
                title: 'No',
                route: '/license-plate',
                action: 'setInsuranceNo'
              },
              {
                title: 'Yes',
                route: '/customer-portal-login',
                action: 'setInsuranceYes'
              }
            ]
          }
        }
      }
    }
  },
  '/license-plate': {
    data: {
      item: {
        id: 'license-plate-page-id',
        name: 'License Plate Page',
        path: '/license-plate',
        fields: {
          heading: {
            value: 'Enter License Plate'
          },
          paragraph: {
            value: 'Please enter your license plate number so we can look up your vehicle information.'
          },
          subheading: {
            value: 'License Plate Number:'
          },
          buttons: {
            value: [
              {
                title: 'Continue',
                route: '/is-this-your-car'
              }
            ]
          }
        }
      }
    }
  },
  '/is-this-your-car': {
    data: {
      item: {
        id: 'is-this-your-car-page-id',
        name: 'Is This Your Car Page',
        path: '/is-this-your-car',
        fields: {
          heading: {
            value: 'Is This Your Car?'
          },
          paragraph: {
            value: 'Please confirm if the vehicle information below matches your car.'
          },
          buttons: {
            value: [
              {
                title: 'Yes, this is my car',
                route: '/zip-code'
              },
              {
                title: 'No, this is not my car',
                route: '/license-plate'
              }
            ]
          }
        }
      }
    }
  },
  '/zip-code': {
    data: {
      item: {
        id: 'zip-code-page-id',
        name: 'Zip Code Page',
        path: '/zip-code',
        fields: {
          heading: {
            value: 'Enter Your Zip Code'
          },
          paragraph: {
            value: 'We need your zip code to provide you with an accurate insurance quote.'
          },
          subheading: {
            value: 'Zip Code:'
          },
          buttons: {
            value: [
              {
                title: 'Continue',
                route: '/thanks'
              }
            ]
          }
        }
      }
    }
  },
  '/thanks': {
    data: {
      item: {
        id: 'thanks-page-id',
        name: 'Thank You Page',
        path: '/thanks',
        fields: {
          heading: {
            value: 'Thank You!'
          },
          paragraph: {
            value: 'Thank you for providing your information. We will process your request and get back to you soon.'
          },
          buttons: {
            value: []
          }
        }
      }
    }
  }
};

export const handlers = [
  http.post('/api/graphql', async ({ request }) => {
    await delay(300); // Simulate network latency
    
    const body = await request.json() as { query: string; variables: { path: string } };
    const routePath = body.variables?.path;
    
    // Find matching route content
    const content = routeContentMap[routePath] || {
      data: {
        item: {
          id: 'default-id',
          name: 'Default Page',
          path: routePath,
          fields: {
            heading: {
              value: 'Page Content'
            },
            paragraph: {
              value: 'Content loading...'
            },
            buttons: {
              value: []
            }
          }
        }
      }
    };
    
    return HttpResponse.json(content);
  })
];
