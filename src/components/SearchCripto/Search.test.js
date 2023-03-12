import { render, screen } from '@testing-library/react';
import Search from './Search';

test('render search input', () => {
    render(<Search />);
    const inputEl = screen.getByTestId("search-input");
    expect(inputEl).toBeInTheDocument();
    expect(inputEl).toHaveAttribute("type", "text");
  });