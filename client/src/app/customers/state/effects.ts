import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { catchError, map, concatMap, switchMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';

import * as CustomerActions from './actions';
import { Action } from '@ngrx/store';
import { CustomersService } from '../services/customers.service';



@Injectable()
export class CustomerEffects implements OnInitEffects {

  loads$ = createEffect(() => 
    this.actions$.pipe(
      ofType(CustomerActions.loadCustomers),
      switchMap(() => this.customerSerivice.getCustomers()
        .pipe(
            map(data => CustomerActions.loadCustomersSuccess({ data })),
            catchError(error => of(CustomerActions.loadCustomersFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private customerSerivice: CustomersService
  ) {}

  ngrxOnInitEffects(): Action {
    return CustomerActions.loadCustomers();
  }

}
