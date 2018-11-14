# Redux + React - basic combined reducers app

## Steps to create the app
### First part - create a new react project and install redux

* Create a new react app with the following command:
```
create-react-app 04_combined reducers
```
* Change the command line path to the new project, with the following command:
```
cd 04_combined reducers
```
* Add to the project , new npm packages (for redux), with the following command:
```
npm install --save redux
npm install --save react-redux 
```
* Go to `src` folder, and remove all files, beside `registerServiceWorker.js` and `index.js`


### Second part - create the reducer functions

* Add to `src` folder, a new sub folder named `reducers`
* Add to `src/reducers` a new js file, named `counterReducer.js`, with the following content:
```javascript

//this state is the default state 
//that will init the aplication's state in the first time
const initialState = {
  count: 0
};


//in the reducer we get a "default parameter" that is called "state"
//in the first tume the state will be "undefined", 
//so the reducer will use the default vale (initialState)
export function counterReducer(prevState = initialState, action) {

  let nextState;
  switch (action.type) {
    case 'INCREMENT':
    nextState= {
        count: prevState.count + 1
      }; break;
    case 'DECREMENT':
    nextState= {
        count: prevState.count - 1
      }; break;
    default: nextState= prevState;
  }

  console.log("counterReducer",{ prevState, action, nextState });
  return nextState;

}

```
* Add to `src/reducers` a new js file, named `userReducer.js`, with the following content:
```javascript

const initialState = {
    user: {userName:"Guest"}
  };
  
  export function userReducer(prevState = initialState, action) {
  
    let nextState;
    switch (action.type) {
      case 'LOGIN':
      nextState= {
          user: action.payload
        }; break;

      case 'LOGOUT':
      nextState= initialState; break;

      default:
      nextState= prevState;
    }
  
    console.log("userReducer",{ prevState, action, nextState });
    return nextState;
  
  }
  
  
  
```


### Third part - use the reducers to create a provider
* Go to `src/index.js` file, and edit the content to the following code:   
    * We used the 2 reducers that we created in the second step - inside the `combineReducers` function , to create a one reducer that is a combination of the 2 reducers
    *  We used the `combineReducers` to pass it as an argument to the `createStore` that returns a store
    *  We used the `store` to initial the `store` attribute in the  `<Provider>` component tag
    *  Every component that is inside the `<Provider>`, can access the `store` that we created

```javascript
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import App from './components/App';
import Login from './components/Login';
import { counterReducer } from './reducers/counterReducer';
import { userReducer } from './reducers/userReducer';

const combined = combineReducers({
  counterReducer,
  userReducer
})
/**
 * createStore  -Creates a Redux store that holds the state tree.
 * @param reducer A function that returns the next state tree, given the
 *   current state tree and the action to handle.
 * @returns A Redux store that lets you read the state, dispatch actions and
 *   subscribe to changes.
 */
const myStore = createStore(combined);


/**
 * Provider - is a "react-redux" built-in component
 * Makes the Redux store available to the connect() 
 * calls in the component hierarchy below.
 */
render(
  <Provider store={myStore}>
    { /*inside Provider we can create only one element (like return in render function)*/ }
    <div>
      <Login />
      <App />
    </div>
  </Provider>
, document.getElementById('root'));

```


### Fourth part - use the provider`s store in the comonents
* Add to `src` folder, a new sub folder named `components`
* Add to `src/components` a new js file, named `App.js`
    * Add the following function (outside the `App` class)
        ```javascript
        const mapStateToProps = (state) =>{
        return {
            count: state.counterReducer.count,
            name: state.userReducer.user.userName
            };
        }
        ```
    * We need to `import { connect } from 'react-redux'` to use the `connect` in order to connect our `App` component to the provider's store
    * We added this line:
    ```javascript
    const reduxApp = connect(mapStateToProps)(App); 
    ```   
    * `(mapStateToProps)` - is a function that gets the state of the provider's store, and returns only the parts that the component needs from this state object.   
        The returned object from the `mapStateToProps` function will be added to the `props` of our `App` comonent
    * `(App)` - To add to the `props` of our `App` comonent, the `dispatch` function
    * In the `App` component, we used the `this.props.dispatch` function, with a action parameter (a json object that contains a `type` property with a string that describes the reason why we called dispatch)   
    The `dispatch` will call all the reducers, and a new state will be returned to the provider's store
    * When the provider's store is changed, the function will re-render the jsx content

The full content of the `src/components/App.js` is:
```javascript
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
```
* Add to `src/components` a new js file, named `Login.js`, with the following content:
```javascript
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Login extends Component {

    login = () => {
        let userName = this.refs.userName.value;
        let password = this.refs.userPassword.value;
        this.props.dispatch(
             {
                 type:"LOGIN",
                 payload:{userName,password}
             }
        );
    }
          

    logout = () => {
        this.props.dispatch({"type":"LOGOUT"});
    }

    render() {
        if (this.props.name === "Guest")
            return (
                <div className="jumbotron text-center">
                    <h1>Welcome to this site</h1>

                    <div className="input-group">
                        <p>Name:</p>
                        <input type="text" className="form-control" size="50" ref="userName" />
                    </div>


                    <div className="input-group">
                        <p>Password</p>
                        <input type="password" className="form-control" size="50" ref="userPassword" />
                    </div>
                    <br />
                    <div className="input-group">
                        <button className="btn btn-danger" onClick={this.login}>Login</button>
                    </div>

                </div>)

        return (
            <button className="btn btn-danger" onClick={this.logout}>Logout</button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        name: state.userReducer.user.userName
    };
}


const reduxLogin = connect(mapStateToProps)(Login);
export default reduxLogin;
```


### Fifth part - run the react app
* Run in the command line the following command:
```
npm start
```
and open the browser at http://localhost:3000/ to view the app


## Steps to clone this app from github and run it in dev mode
* Clone this app to your local computer
* Change the command line path to the this project, with the following command:
```
cd 04_combined reducers
```
* Re-install all the requierd npm-packages, with the following command:
```
npm install
```
* Run in the command line the following command:
```
npm start
```
and open the browser at http://localhost:3000/ to view the app



