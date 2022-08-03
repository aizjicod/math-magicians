import React from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
      err: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const {
      total, next, operation, err,
    } = calculate(this.state, e.target.value);
    this.setState({
      total, next, operation, err,
    });
  }

  render() {
    const {
      total, next, operation, err,
    } = this.state;
    return (
      <div id="Calculator">
        <div id="result">
          { next
        || operation
        || total
        || err
        || 0}
        </div>
        <div className="pad">
          <div className="utility">
            <button type="button" value="AC" onClick={this.handleClick}>AC</button>
            <button type="button" value="+/-" onClick={this.handleClick}>+/-</button>
            <button type="button" value="%" onClick={this.handleClick}>%</button>
          </div>
          <div className="numpad">
            <button type="button" value="7" onClick={this.handleClick}>7</button>
            <button type="button" value="8" onClick={this.handleClick}>8</button>
            <button type="button" value="9" onClick={this.handleClick}>9</button>
            <button type="button" value="4" onClick={this.handleClick}>4</button>
            <button type="button" value="5" onClick={this.handleClick}>5</button>
            <button type="button" value="6" onClick={this.handleClick}>6</button>
            <button type="button" value="1" onClick={this.handleClick}>1</button>
            <button type="button" value="2" onClick={this.handleClick}>2</button>
            <button type="button" value="3" onClick={this.handleClick}>3</button>
            <button type="button" value="0" onClick={this.handleClick} className="numpad-0">0</button>
            <button type="button" value="." onClick={this.handleClick}>.</button>
          </div>
          <div className="leftSide">
            <button type="button" value="÷" onClick={this.handleClick}>÷</button>
            <button type="button" value="x" onClick={this.handleClick}>x</button>
            <button type="button" value="-" onClick={this.handleClick}>-</button>
            <button type="button" value="+" onClick={this.handleClick}>+</button>
            <button type="button" value="=" onClick={this.handleClick}>=</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
