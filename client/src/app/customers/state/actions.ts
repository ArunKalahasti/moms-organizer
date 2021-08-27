import { createAction, props } from '@ngrx/store';
import { CustomerModel } from '../models/customer.model';

export const loadCustomers = createAction(
  '[] Load Customers'
);

export const loadCustomersSuccess = createAction(
  '[] Load Customers Success',
  props<{ data: CustomerModel[] }>()
);

export const loadCustomersFailure = createAction(
  '[] Load Customers Failure',
  props<{ error: any }>()
);
