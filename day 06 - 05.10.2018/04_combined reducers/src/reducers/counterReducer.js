
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


