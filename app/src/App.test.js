import { render, screen , cleanup} from '@testing-library/react';
import App from './App';
import Resources from "./pages/Resources";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders resources page', () => {
  render(<Resources />);
  expect(screen.getByRole("svg")).toBeInTheDocument();
});
