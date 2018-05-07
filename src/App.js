import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi Im React</h1>
        <Person name="aleks" age="21" />
        <Person name="simon" age="20" />
        <Person name="henry" age="11">
          Am the youngest
        </Person>
      </div>
    );
  }
}

export default App;
