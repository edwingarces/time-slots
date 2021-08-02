/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('Suit for testing App component', () => {
  test('Render main screen', () => {
    render(<App />);
    const header = screen.getByText(/Tramos horarios/i);
    expect(header).toBeInTheDocument();
  });
  test('Assign motorcyclist', () => {
    render(<App />);
    const tableElement = screen.getByText('08:00');
    fireEvent.click(tableElement);
    const tableDescription = screen.getByText(/1 Asignados/i);
    expect(tableDescription).toBeInTheDocument();
  });
  test('Change user', () => {
    render(<App />);
    const select = screen.getByText('Usuario 1');
    fireEvent.click(select);
    const dropdownElement = screen.getByText('Usuario 2');
    fireEvent.click(dropdownElement);
    const user = screen.getByText('Usuario 2');
    expect(user).toBeInTheDocument();
  });
  test('Leave a motorcyclist', () => {
    render(<App />);
    const tableElement = screen.getByText('08:00');
    fireEvent.click(tableElement);
    const tableDescription = screen.getByText(/1 Asignados/i);
    fireEvent.click(tableDescription);
    const message = screen.getByText('Se liberó un motociclista');
    expect(message).toBeInTheDocument();
  });
});
