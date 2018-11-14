import React, { Component } from 'react';


class App extends Component {

  state = {
    fname: "",
    pass: ""
  };


  loginHandler = () => {
    console.log(this.state);
  }

  changeHandler = () => {
    this.setState({
      fname: this.refs.fname.value,
      pass: this.refs.pass.value
    });
  }


  render() {
    return (
      <div>
        <h1>Login form</h1>
        <label>first name:</label>
        <input ref="fname" 
               value={this.state.fname} 
               onChange={this.changeHandler}/>
        <br />
        <label>password:</label>
        <input type="password" 
               ref="pass" 
               value={this.state.pass} 
               onChange={this.changeHandler}/>
        <br />
        <button onClick={this.loginHandler}>login</button>
      </div>
    );
  }
}

export default App;
