import React, { Component } from 'react';
import { user } from './models/user';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    for (let x of user) {
      this.state[x.name] = "";
    }
  }


  loginHandler = () => {
    console.log(this.state);
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <h1>Login form</h1>

        {
          user.map((val, index) => (
            <div key={index}>
              <label>{val.name}</label>
              <input
                type={val.type}
                name={val.name}
                value={this.state[val.name]}
                onChange={this.changeHandler} />
              {(val.isValid(this.state[val.name])) || !(this.state[val.name]) ?
                undefined :
                <p>{val.errMsg}</p>}
            </div>
          ))
        }

        <button onClick={this.loginHandler}>login</button>
      </div>
    );
  }
}

export default App;
