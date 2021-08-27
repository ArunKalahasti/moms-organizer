import { Action, createReducer, MetaReducer, on } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { CustomerModel } from '../models/customer.model';
import * as Actions from './actions';

export const FeatureKey = 'customer';

export interface State {
  customers: CustomerModel[]
}

export const initialState: State = {
  customers: []
};


export const reducer = createReducer(
  initialState,
  on(Actions.loadCustomers, state => state),
  on(Actions.loadCustomersSuccess, (state, action) => ({
      ...state,
      customers: action.data
   })),
  on(Actions.loadCustomersFailure, (state, action) => state),

);

export const metaReducer: MetaReducer<State>[] = !environment.production ? [] : [];
