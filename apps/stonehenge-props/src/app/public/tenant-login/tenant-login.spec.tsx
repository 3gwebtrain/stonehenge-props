import { render } from '@testing-library/react';

import TenantLogin from './tenant-login';

describe('TenantLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TenantLogin />);
    expect(baseElement).toBeTruthy();
  });
});
