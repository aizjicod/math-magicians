import React from 'react';
import './Calculator.css';

const Utility = () => (
  <div className="utility">
    <button type="button">AC</button>
    <button type="button">+/-</button>
    <button type="button">%</button>
  </div>
);

const LeftSide = () => (
  <div className="leftSide">
    <button type="button">÷</button>
    <button type="button">*</button>
    <button type="button">-</button>
    <button type="button">+</button>
    <button type="button">=</button>
  </div>
);

const Numpad = () => (
  <div className="numpad">
    <button type="button">7</button>
    <button type="button">8</button>
    <button type="button">9</button>
    <button type="button">4</button>
    <button type="button">5</button>
    <button type="button">6</button>
    <button type="button">1</button>
    <button type="button">2</button>
    <button type="button">3</button>
    <button type="button" className="numpad-0">0</button>
    <button type="button">.</button>
  </div>
);

const Pad = () => (
  <div className="pad">
    <Utility />
    <Numpad />
    <LeftSide />
  </div>
);

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="Calculator">
        <div id="result">results</div>
        <Pad />
      </div>
    );
  }
}

export default Calculator;
