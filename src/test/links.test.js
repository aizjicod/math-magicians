import { render, fireEvent, screen } from '@testing-library/react';
import App from '../App';
import Calculator from '../components/calculator';

test('links work properly', () => {
  const { container } = render(<App url="/" />);
  fireEvent.click(screen.getByText('Home'));
  expect(container.getElementsByClassName('home')[0]).toHaveTextContent('Welcome to our page');
});

test('links work properly', () => {
  const { container } = render(<App url="/calculator" />);
  fireEvent.click(screen.getByText('Calculator'));
  expect(container.getElementsByClassName('calculator-page')[0]).toHaveTextContent('Lets do some math!');
});

test('links work properly', () => {
  const { container } = render(<App url="/quote" />);
  fireEvent.click(screen.getByText('Quote'));
  expect(container.getElementsByClassName('quote')[0]).toHaveTextContent('Mathematics is not about numbers');
});

test('When a user clicks in the Calculator link, the Calculator page should appear', () => {
  render(<Calculator />);
  fireEvent.click(screen.queryByText('6'));
  fireEvent.click(screen.queryByText('x'));
  fireEvent.click(screen.queryByText('8'));
  fireEvent.click(screen.queryByText('='));

  expect(screen.queryByText('48')).not.toBeNull();
});
