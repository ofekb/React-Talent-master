import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import './App.css';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>

          {/*HEDER - START*/}
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <div className="logo"></div>
              </div>
              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to='/home'>Home</Link></li>
                  <li><Link to='/products'>Products</Link></li>
                </ul>
              </div>
            </div>
          </nav>
          {/*HEDER - END*/}

          <hr />
          <Route exact path='/' component={Home} />
          <Route path='/home' component={Home} />
          <Route path='/products' component={Products} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App