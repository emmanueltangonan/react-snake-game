import { render, screen } from '@testing-library/react';
import SnakeApp from '../SnakeApp';

test('renders learn react link', () => {
  render(<SnakeApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
