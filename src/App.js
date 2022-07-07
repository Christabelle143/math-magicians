import React from 'react';
import Calculator from './components/Calculator';
import './index.css';

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <div className="App-container">
          <Calculator />
        </div>
      </div>
    );
  }
}

export default App;
