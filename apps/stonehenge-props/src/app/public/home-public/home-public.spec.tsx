import { render } from '@testing-library/react';

import HomePublic from './home-public';

describe('HomePublic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomePublic />);
    expect(baseElement).toBeTruthy();
  });
});
