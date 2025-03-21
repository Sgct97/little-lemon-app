import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the App component', () => {
  render(<App />);
  // Check that App renders without errors
  const appElement = document.querySelector('.App');
  expect(appElement).toBeInTheDocument();
});
