import { render } from '@testing-library/react';

import AddLandloard from './add-landloard';

describe('AddLandloard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddLandloard />);
    expect(baseElement).toBeTruthy();
  });
});
