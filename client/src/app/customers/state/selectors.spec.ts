import * as from from './reducer';
import { selectState } from './selectors';

describe(' Selectors', () => {
  it('should select the feature state', () => {
    const result = selectState({
      [from.FeatureKey]: {}
    });

    expect(result).toEqual({customers: []});
  });
});
