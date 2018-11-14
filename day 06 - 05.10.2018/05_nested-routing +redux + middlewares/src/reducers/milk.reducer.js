import { milkAction } from './../models/milkAction';

export function milk(state = {counter:0}, action) {


  switch (action.type) {
    case milkAction.ADD_SUCCESS:
    return {
      counter:state.counter+1
    };
    case milkAction.ADD_REQUEST:
    return {
      counter:state.counter,
      isAdding:true
    };
    case milkAction.ADD_FAIL:
      return {
        counter:state.counter,
        isAdding:false

      };
    case milkAction.REMOVE:
      return {
        counter:state.counter-1
      };
    default:
      return state
  }
}