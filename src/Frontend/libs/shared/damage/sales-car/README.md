# damage-sales-car

This library contains components specific to the damage sales car flow.

## Components

### OverviewComponent
A standalone component that displays car information retrieved from the license plate lookup.

**Inputs:**
- `carInfo` (CarInfo | null): The car information to display

**Usage:**
```html
<lib-overview [carInfo]="carInfo$ | async"></lib-overview>
```

The component displays:
- License Plate
- Make
- Model
- Fuel Type
- Trim Level

## Running unit tests

Run `nx test damage-sales-car` to execute the unit tests.
