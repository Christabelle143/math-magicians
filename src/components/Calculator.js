import React from 'react';

class Calculator extends React.PureComponent {
  render() {
    return (
      <div className="calculator">
        <input type="number" className="calc-input" />
        <table className="calc-buttons">
          <tr className="tr">
            <td className="button1">AC</td>
            <td className="button1">+/-</td>
            <td className="button1">%</td>
            <td className="button2">+</td>
          </tr>
          <tr>
            <td className="button1">7</td>
            <td className="button1">8</td>
            <td className="button1">9</td>
            <td className="button2">x</td>
          </tr>
          <tr className="tr">
            <td className="button1">4</td>
            <td className="button1">5</td>
            <td className="button1">6</td>
            <td className="button2">-</td>
          </tr>
          <tr className="tr">
            <td className="button1">1</td>
            <td className="button1">2</td>
            <td className="button1">3</td>
            <td className="button2">+</td>
          </tr>
          <tr className="tr">
            <td className="button1" colSpan="2">0</td>
            <td className="button1">.</td>
            <td className="button2">=</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Calculator;
