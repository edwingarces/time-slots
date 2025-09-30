import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('App scheduler', () => {
  test('renders redesigned header title', () => {
    render(<App />);
    expect(screen.getByRole('heading', { name: /Gestión de horarios/i })).toBeInTheDocument();
  });

  test('switches between view modes', () => {
    render(<App />);
    const calendarToggle = screen.getByRole('radio', { name: /Calendario/ });
    fireEvent.click(calendarToggle);
    expect(calendarToggle).toHaveAttribute('aria-checked', 'true');
  });

  test('assigns and releases a timeslot for selected user', () => {
    render(<App />);
    const firstSlot = screen.getByRole('button', { name: /08:00/ });
    fireEvent.click(firstSlot);
    expect(screen.getByText(/Se asignó un motociclista/)).toBeInTheDocument();
    fireEvent.click(firstSlot);
    expect(screen.getByText(/Se liberó un motociclista/)).toBeInTheDocument();
  });
});

