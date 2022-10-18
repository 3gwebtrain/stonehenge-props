import { render } from '@testing-library/react';

import AdminRegister from './admin-register';

describe('AdminRegister', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminRegister />);
    expect(baseElement).toBeTruthy();
  });
});
