// src/App.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for extra matchers like .toBeInTheDocument
import App from './App';

test('renders the App component', () => {
  // Render the App component
  render(<App />);
  const headerElement = screen.getByText(/hello, world!/i);
  expect(headerElement).toBeInTheDocument();

});