import { saladAction } from './../models/saladAction';

export function salad(state = {counter:0}, action) {


  switch (action.type) {
    case saladAction.ADD_SUCCESS:
    return {
      counter:state.counter+1
    };
    case saladAction.ADD_REQUEST:
    return {
      counter:state.counter,
      isAdding:true
    };
    case saladAction.ADD_FAIL:
      return {
        counter:state.counter,
        isAdding:false

      };
    case saladAction.REMOVE:
      return {
        counter:state.counter-1
      };
    default:
      return state
  }
}