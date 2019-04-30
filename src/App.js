import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import About from './components/About';
import store from './store';

class App extends Component {
  render() {
    return (
          <div className="App">
            <header className="App-header">
              <Navbar />
            </header>
            <hr />
          <Route path="/about" component={About} />
          </div>
    );
  }
}

export default App;
