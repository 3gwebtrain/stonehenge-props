import { render } from '@testing-library/react';

import FooterPublic from './footer-public';

describe('FooterPublic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FooterPublic />);
    expect(baseElement).toBeTruthy();
  });
});
