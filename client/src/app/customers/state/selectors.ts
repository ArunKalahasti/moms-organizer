import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as from from './reducer';

export const selectState = createFeatureSelector<from.State>(
  from.FeatureKey
);
