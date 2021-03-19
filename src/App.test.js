import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('renders the title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Tarjetas creadas/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders the modal', () => {
  // Arrange
  render(<App />);
  const createButton = screen.getByTestId('create-button');

  // Act
  userEvent.click(createButton);

  // Assert
  const modal = screen.getByText(/Nueva tarjeta/i);
  expect(modal).toBeInTheDocument();
});

test('create a new card', () => {
  // Arrange
  render(<App />);
  const createButton = screen.getByTestId('create-button');

  // Act
  userEvent.click(createButton);
  const titleInput = screen.getByPlaceholderText('Título');
  const saveButton = screen.getByRole('button');

  userEvent.type(titleInput, 'Test Card');
  userEvent.click(saveButton);

  // Assert
  const cardTitle = screen.getByText(/Test Card/i);
  expect(cardTitle).toBeInTheDocument();
});