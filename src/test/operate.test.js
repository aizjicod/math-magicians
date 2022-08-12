import operate from '../logic/operate';

describe('testing operate.js logic', () => {
  test('testing sum for operate.js', () => {
    const result = operate('20', '25', '+');
    expect(result).toBe('45');
  });

  test('testing rest for operate.js', () => {
    const result = operate('20', '25', '-');
    expect(result).toBe('-5');
  });

  test('testing mult for operate.js', () => {
    const result = operate('20', '2', 'x');
    expect(result).toBe('40');
  });

  test('testing division for operate.js', () => {
    const result = operate('20', '2', '÷');
    expect(result).toBe('10');
  });
  test('sum', () => {
    const result = operate(1, 2, '+');
    expect(result).toBe('3');
  });

  test('substract', () => {
    const result = operate(6, 3, '-');
    expect(result).toBe('3');
  });

  test('multiply', () => {
    const result = operate(6, 3, 'x');
    expect(result).toBe('18');
  });

  test('sivision', () => {
    const result = operate(6, 3, '÷');
    expect(result).toBe('2');
  });

  test('sivision', () => {
    const result = operate(6, 0, '÷');
    expect(result).toBe('Can\'t divide by 0.');
  });

  test('modal', () => {
    const result = operate(6, 2, '%');
    expect(result).toEqual('0');
  });

  test('modal', () => {
    const result = operate(6, 0, '%');
    expect(result).toEqual('Can\'t find modulo as can\'t divide by 0.');
  });
});
