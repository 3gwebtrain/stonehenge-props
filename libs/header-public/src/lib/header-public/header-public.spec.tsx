import { render } from '@testing-library/react';

import HeaderPublic from './header-public';

describe('HeaderPublic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeaderPublic />);
    expect(baseElement).toBeTruthy();
  });
});
