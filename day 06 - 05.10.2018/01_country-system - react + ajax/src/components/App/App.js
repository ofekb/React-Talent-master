import React, { Component } from 'react';
import './App.css';
import Home from './../Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Country - Info - System</h1>
        </header>

        <main>
              <Home/>
        </main>

        <footer className="App-header">
          <p className="App-title">&copy; JB-  {new Date().getFullYear()}</p>
        </footer>

      </div>
    );
  }
}

export default App;
