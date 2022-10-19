import { render } from '@testing-library/react';

import ModalLogin from './modal-login';

describe('ModalLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModalLogin />);
    expect(baseElement).toBeTruthy();
  });
});
