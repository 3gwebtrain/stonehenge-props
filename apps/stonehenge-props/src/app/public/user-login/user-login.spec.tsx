import { render } from '@testing-library/react';

import UserLogin from './user-login';

describe('UserLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserLogin />);
    expect(baseElement).toBeTruthy();
  });
});
