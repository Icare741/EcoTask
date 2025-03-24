import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(document.body).toBeDefined();
  });

  it('renders the navbar', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // Vérifie que le titre de l'application est présent
    expect(screen.getByText('EcoTask')).toBeDefined();
  });
}); 