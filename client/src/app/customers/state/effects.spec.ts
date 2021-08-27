import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CustomerEffects } from './effects';

describe('Effects', () => {
  let actions$: Observable<any>;
  let effects: CustomerEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CustomerEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CustomerEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
