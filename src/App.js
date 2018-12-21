import React, { Component } from 'react';
import './App.css';
import { RecomposeCounter } from './counter/RecomposeCounter';
import { HookCounter } from './counter/HookCounter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">Recompose vs Hooks</header>
        <RecomposeCounter />
        <hr />
        <HookCounter />
      </div>
    );
  }
}

export default App;
