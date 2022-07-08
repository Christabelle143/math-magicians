import React from 'react';
// import calculate from '../logic/calculate';

class Calculator extends React.PureComponent {
//   constructor(props) {
//     super(props);

//     this.state = {
//       total: 0,
//       next: 0,
//     };

//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick(e) {
//     const operation = e.target.value;
//     const result = calculate(this.state, operation);
//     this.setState(result);
//   }

  render() {
    // const { next, total } = this.state;
    return (
      <>
        <div className="calculator">
          <div className="calc-input"><span className="output">{next || total || 0}</span></div>
          <div className="calc-buttons">
          <button type="button" className="button1">AC</button>
            <button type="button" className="button1">+/-</button>
            <button type="button" className="button1">%</button>
            <button type="button" className="button2 active"><span>&#247;</span></button>
            <button type="button" className="button1">7</button>
            <button type="button" className="button1">8</button>
            <button type="button" className="button1">9</button>
            <button type="button" className="button2 active">x</button>
            <button type="button" className="button1">4</button>
            <button type="button" className="button1">5</button>
            <button type="button" className="button1">6</button>
            <button type="button" className="button2 active">-</button>
            <button type="button" className="button1">1</button>
            <button type="button" className="nbutton1">2</button>
            <button type="button" className="button1">3</button>
            <button type="button" className="button2 active">+</button>
            <button type="button" className="button1">0</button>
            <button type="button" className="button1">.</button>
            <button type="button" className="button2 active">=</button>
          </div>
        </div>
      </>
    );
  }
}

export default Calculator;
