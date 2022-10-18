import { render } from '@testing-library/react';

import AdminLogin from './admin-login';

describe('AdminLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminLogin />);
    expect(baseElement).toBeTruthy();
  });
});
