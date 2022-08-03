import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [total, setTotal] = useState({ total: null });
  const [next, setNext] = useState({ next: null });
  const [operation, setOperation] = useState({ operation: null });
  const [err, setErr] = useState({ err: null });
  const handleClick = (e) => {
    const result = calculate({
      total, next, operation, err,
    }, e.target.value);
    setTotal(() => result.total);
    setNext(() => result.next);
    setOperation(() => result.operation);
    setErr(() => result.err);
  };
  return (
    <div id="Calculator">
      <div id="result">
        {next
          || operation
          || total
          || err
          || 0}
      </div>
      <div className="pad">
        <div className="utility">
          <button type="button" onClick={handleClick} value="AC">AC</button>
          <button type="button" onClick={handleClick} value="+/-">+/-</button>
          <button type="button" onClick={handleClick} value="%">%</button>
        </div>
        <div className="numpad">
          <button type="button" onClick={handleClick} value="7">7</button>
          <button type="button" onClick={handleClick} value="8">8</button>
          <button type="button" onClick={handleClick} value="9">9</button>
          <button type="button" onClick={handleClick} value="4">4</button>
          <button type="button" onClick={handleClick} value="5">5</button>
          <button type="button" onClick={handleClick} value="6">6</button>
          <button type="button" onClick={handleClick} value="1">1</button>
          <button type="button" onClick={handleClick} value="2">2</button>
          <button type="button" onClick={handleClick} value="3">3</button>
          <button type="button" onClick={handleClick} value="0" className="numpad-0">0</button>
          <button type="button" onClick={handleClick} value=".">.</button>
        </div>
        <div className="leftSide">
          <button type="button" onClick={handleClick} value="÷">÷</button>
          <button type="button" onClick={handleClick} value="x">x</button>
          <button type="button" onClick={handleClick} value="-">-</button>
          <button type="button" onClick={handleClick} value="+">+</button>
          <button type="button" onClick={handleClick} value="=">=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
