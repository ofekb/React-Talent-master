import React, { Component } from 'react';


class App extends Component {

  state = {
    fname: "",
    pass: ""
  };

  loginHandler = () => {
    console.log(this.state);
  }

  changeHandler = (e) => {
    console.log(e.target.name,e.target.value);

    let obj={ 
      [e.target.name]: e.target.value 
    };
    
    this.setState(obj);
  } 

  render() {
    return (
      <div>
        <h1>Login form</h1>
        <label>first name:</label>
        <input
          name="fname"
          value={this.state.fname}
          onChange={this.changeHandler} />

        <br />
        <label>password:</label>
        <input type="password"
          name="pass"
          value={this.state.pass}
          onChange={this.changeHandler} />
        <br />
        <button onClick={this.loginHandler}>login</button>
      </div>
    );
  }
}

export default App;
