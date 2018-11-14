import React, { Component } from 'react';
import Pizza from './Pizza';
import Chips from './Chips';

class App extends Component {

  state = {foodChoice: "Pizza"};

  foodChoiceHandler = (str) => {
    this.setState({foodChoice: str});
  };
  
  render() {
    return (
      <div>
        {
          this.state.foodChoice === "Pizza" ?
            <Pizza price="12" /> :
            <Chips price="14" />
        }
        <button onClick={()=>this.foodChoiceHandler("Pizza")}>pizza</button>
        <button onClick={()=>this.foodChoiceHandler("Chips")}>chips</button>
      </div>
    );
  }
}

export default App;
