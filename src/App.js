import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'aleks', age: 21 },
      { name: 'peter', age: 20 },
      { name: 'joshua', age: 23 }
    ]
  };
  changeNameHandler = newName => {
    this.setState({
      persons: [
        { name: newName, age: 21 },
        { name: 'peter', age: 20 },
        { name: 'joshua', age: 23 }
      ]
    });
  };
  nameChanged = event => {
    this.setState({
      persons: [
        { name: 'aleks', age: 21 },
        { name: 'peter', age: 20 },
        { name: event.target.value, age: 23 }
      ]
    });
  };
  render() {
    const style = {
      backgroundColor: 'white',
      border: '1px solid green',
      borderRadius: '20%'
    };
    return (
      <div className="App">
        <h1>Hi Im React</h1>
        <button
          onClick={this.changeNameHandler.bind(this, 'alexs')}
          style={style}
        >
          Change Name
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          click={this.changeNameHandler.bind(this, 'henry')}
          changed={this.nameChanged}
        >
          Am the youngest
        </Person>
      </div>
    );
  }
}

export default App;
