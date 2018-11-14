import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  render() {
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>

        <span>&copy; {this.props.name}</span>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  // filter only the reqiered props that we will use in the App component
  // then we can access them inside the class as: this.props.count & this.props.name
  return {
      count: state.counterReducer.count,
      name: state.userReducer.user.userName
    };
} 

const reduxApp = connect(mapStateToProps)(App);
export default reduxApp;