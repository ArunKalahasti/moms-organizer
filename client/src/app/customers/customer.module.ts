import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { CustomerEffects } from './state/effects';
import { StoreModule } from '@ngrx/store';
import { FeatureKey, metaReducer, reducer } from './state/reducer';
import { CustomerCreationFormComponent } from './components/customer-creation-form/customer-creation-form.component';

@NgModule({
  declarations: [
    CustomerCreationFormComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      FeatureKey,
      reducer,
      { metaReducers: metaReducer }
    ),
    EffectsModule.forFeature([CustomerEffects])
  ]
})
export class CustomerModule { }
