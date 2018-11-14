import React, { Component } from 'react';

//CLASS COMPONENT
class Chips extends Component {

  //----------step 1--------
  constructor(props){
    console.log("Chips Component constructor");
    super(props); 
    this.state={price:this.props.price};
  }

  //----------step 2--------
  componentWillMount(){
    console.log("Chips Component componentWillMount");
  }


  //----------step 3--------
  //----------step 7--------
  render() {
    console.log("Chips Component render");
    return (
      <div>
          <h1>Chips price: {this.state.price}</h1>
          <button onClick={()=>this.setState({price:13})}>change price</button>
      </div>
    );
  }


   //----------step 4--------
   componentDidMount(){
    console.log("Chips Component componentDidMount");

  }

  //----------lifecycle - step 5-------
  //gets executed right before a Component is updated in the DOM
  //can cancel the update by returning "false" value
  shouldComponentUpdate(nextProps, nextState) {
    console.log('Chips Component shouldComponentUpdate',this.state, nextState);
    let userChoice=window.confirm("Do you want to update yout dom?");
    return userChoice;
  }

  //----------lifecycle - step 6-------
  componentWillUpdate(nextProps, nextState) {
    console.log('Chips Component componentWillUpdate', this.state, nextState);
  }


  //----------lifecycle - step 8-------
  componentDidUpdate() {
    console.log('Chips Component componentDidUpdate');
  }

  //----------lifecycle - step 9-------
  componentWillUnmount() {
    console.log('Chips Component componentWillUnmount');
  }

}

export default Chips;
