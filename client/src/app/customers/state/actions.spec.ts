import * as from from './actions';

describe('loads', () => {
  it('should return an action', () => {
    expect(from.loadCustomers().type).toBe('[] Load s');
  });
});
