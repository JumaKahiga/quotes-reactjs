import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import About from './components/About';
import DayQuote from './components/Home';
import Navbar from './components/Navbar';
import PostQuotes from './components/PostQuotes';
import Quotes from './components/Quotes';
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <Navbar />
            </header>
            <hr />
          <Route exact path="/" component={DayQuote} />
          <Route path="/new_quote" component={PostQuotes} />
          <Route path="/all_quotes" component={Quotes} />
          <Route path="/about" component={About} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
