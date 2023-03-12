import { render, screen } from '@testing-library/react';
import FooterApp from './Footer';

test('renders nav route', () => {
  render(<FooterApp />);
//   screen.debug()
  const linkElement = screen.getByText(/Copyright/i);
  expect(linkElement).toBeInTheDocument();
});