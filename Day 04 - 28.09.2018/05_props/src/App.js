import React, { Component } from 'react';
import Pizza from './Pizza';


//class style comonent - state component
class App extends Component {

  render() {
    return (
      <div>
       <h1>{this.props.msg} to Anna's Pizza shop</h1>
       <h2>{this.props.title}</h2>
       <Pizza price="60" slices="4"/>
       <Pizza price="65" slices="6" >with two toppings!!</Pizza>
       <Pizza price="100" slices="8" />
      </div>
    );
  }
}

export default App;
