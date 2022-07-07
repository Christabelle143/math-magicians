import React from 'react';
import Calculator from './components/Calculator';
import './index.css';
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  /* eslint-enable */
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
