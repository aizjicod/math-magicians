import React from 'react';
import './Calculator.css';

const Utility = () => (
  <div className="utility">
    <p>AC</p>
    <p>+/-</p>
    <p>%</p>
  </div>
);

const LeftSide = () => (
  <div className="leftSide">
    <p>÷</p>
    <p>*</p>
    <p>-</p>
    <p>+</p>
    <p>=</p>
  </div>
);

const Numpad = () => (
  <div className="numpad">
    <p>7</p>
    <p>8</p>
    <p>9</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p className="numpad-0">0</p>
    <p>.</p>
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
