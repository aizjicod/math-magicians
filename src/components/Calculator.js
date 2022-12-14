import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Calculator.css';
import calculate from '../logic/calculate';

const Utility = ({ handleClick }) => (
  <div className="utility">
    <button type="button" onClick={handleClick} value="AC">AC</button>
    <button type="button" onClick={handleClick} value="+/-">+/-</button>
    <button type="button" onClick={handleClick} value="%">%</button>
  </div>
);

Utility.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

const Numpad = ({ handleClick }) => (
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
);

Numpad.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

const RightSide = ({ handleClick }) => (
  <div className="rightSide">
    <button type="button" onClick={handleClick} value="÷">÷</button>
    <button type="button" onClick={handleClick} value="x">x</button>
    <button type="button" onClick={handleClick} value="-">-</button>
    <button type="button" onClick={handleClick} value="+">+</button>
    <button type="button" onClick={handleClick} value="=">=</button>
  </div>
);

RightSide.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

const Calculator = () => {
  const [total, setTotal] = useState(null);
  const [next, setNext] = useState(null);
  const [operation, setOperation] = useState(null);
  const [err, setErr] = useState(null);
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
        {next || operation || total || err || 0}
      </div>
      <div className="pad">
        <Utility handleClick={handleClick} />
        <Numpad handleClick={handleClick} />
        <RightSide handleClick={handleClick} />
      </div>
    </div>
  );
};

export default Calculator;
