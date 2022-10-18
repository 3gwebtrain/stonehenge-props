import { render } from '@testing-library/react';

import LandlordLogin from './landlord-login';

describe('LandlordLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LandlordLogin />);
    expect(baseElement).toBeTruthy();
  });
});
