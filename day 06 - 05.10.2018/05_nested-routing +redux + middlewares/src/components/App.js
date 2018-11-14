import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Home from './Home';
import { Products } from './Products';
import './App.css';
class App extends Component {


  render() {
    return (
      <BrowserRouter>
        <div>
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <div className="logo"></div>
              </div>

              <ul className="nav nav-pills" role="tablist">
                <li role="presentation" className="active"><a href="javascript:void(0)">Milk <span className="badge">{this.props.milk.counter}</span></a></li>
                <li role="presentation" className="active"><a href="javascript:void(0)">Salad <span className="badge">{this.props.salad.counter}</span></a></li>
                <li role="presentation" className="active"><a href="javascript:void(0)">Corn <span className="badge">{this.props.corn.counter}</span></a></li>
              </ul>

              <div className="collapse navbar-collapse" id="myNavbar">
                <ul className="nav navbar-nav navbar-right">
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/products'>Products</Link></li>
                </ul>
              </div>
            </div>
          </nav>


          <hr />
          <Route exact path='/' component={Home} />
          <Route path='/products' component={Products} />
        </div>
      </BrowserRouter>
    )
  }
}



function mapStateToProps(state) {
  return state;
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 
