import { render } from '@testing-library/react';

import LayoutPublic from './layout-public';

describe('LayoutPublic', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LayoutPublic />);
    expect(baseElement).toBeTruthy();
  });
});
