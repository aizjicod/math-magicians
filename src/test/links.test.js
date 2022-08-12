import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../components/calculator';

describe('footer component', () => {
  test('testing if theres a 2022 text in the footer', () => {
    render(<Calculator />);
    const calculatorBtn = screen.getByText(/AC/);
    expect(calculatorBtn).toBeInTheDocument();
  });
});

describe('Calculator tests', () => {
  test('Renders Calculator component', () => {
    const tree = render(<Calculator />);
    expect(tree).toMatchSnapshot();
  });

  test('Simulating user interaction', () => {
    render(<Calculator />);
    const result = document.querySelector('#result');
    const key7 = screen.getByText('7');
    const key8 = screen.getByText('8');
    fireEvent.click(key7);
    fireEvent.click(key8);
    expect(result.textContent).toBe('78');
  });

  test('Simulating user interaction', () => {
    render(<Calculator />);

    const result = document.querySelector('#result');
    const key3 = screen.getByText('3');
    const key7 = screen.getByText('7');
    const keyTimes = screen.getByText('x');
    const keyEquals = screen.getByText('=');

    fireEvent.click(key3);
    fireEvent.click(keyTimes);
    fireEvent.click(key7);
    fireEvent.click(keyEquals);

    expect(result.textContent).toBe('21');
  });
});
