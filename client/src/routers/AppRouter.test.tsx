import React from 'react';
import { render } from '@testing-library/react';
import { AppRouter } from './AppRouter';

test('renders <AppRouter />', () => {
  const { getByText } = render(<AppRouter />);
  const greetingElement = getByText(/Welcome/i);
  expect(greetingElement).toBeInTheDocument();
});
