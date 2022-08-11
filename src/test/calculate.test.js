import calculate from '../logic/calculate';


describe('testing calculate.js logic', () => {
  test('test calculate.js value on next', () => {
    const result = calculate({ next: null, total: null, operation: null }, '25');
    expect(result.next).toBe('25');
  });

  test('testing calculate.js value on total', () => {
    const result = calculate({ next: '10', total: '25', operation: '+' }, '=');
    expect(result.total).toBe('35');
  });

  test('testing calculate.js value on operation', () => {
    const result = calculate({ next: null, total: null, operation: null }, '+');
    expect(result.operation).toBe('+');
  });

  it('AC button is clicked', () => {
    const object = {
      total: 2,
      next: 2,
      operation: '+',
    };
    const buttonName = 'AC';
    const result = calculate(object, buttonName);
    expect(result).toStrictEqual({ total: null, next: null, operation: null });
  });
  
  it('= button is clicked', () => {
    const object = {
      total: 2,
      next: 2,
      operation: '+',
    };
    const buttonName = '=';
    const result = calculate(object, buttonName);
    expect(result).toStrictEqual({ total: '4', next: null, operation: null });
  });
  
  it('+/- button is clicked', () => {
    const object = {
      total: 2,
      next: null,
      operation: null,
    };
    const buttonName = '+/-';
    const result = calculate(object, buttonName);
    expect(result).toStrictEqual({ total: '-2', next: null, operation: null });
  });
  
  it('. button is clicked', () => {
    const object = {
      total: null,
      next: '3',
      operation: null,
    };
    const buttonName = '.';
    const result = calculate(object, buttonName);
    expect(result).toStrictEqual({ total: null, next: '3.', operation: null });
  });
  
  it('0 button is clicked', () => {
    const object = {
      total: null,
      next: '0',
      operation: null,
    };
    const buttonName = '5';
    const result = calculate(object, buttonName);
    expect(result).toStrictEqual({ total: null, next: '5' });
  });
});

