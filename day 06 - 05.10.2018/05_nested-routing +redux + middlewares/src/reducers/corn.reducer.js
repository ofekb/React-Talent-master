import { cornAction } from './../models/cornAction';

export function corn(state = {counter:0}, action) {


  switch (action.type) {

    case cornAction.ADD_REQUEST:
    return {
      counter:state.counter,
      isAdding:true
    };

    case cornAction.ADD_SUCCESS:
    return {
      counter:state.counter+1,
      isAdding:false
    };
   
    case cornAction.ADD_FAIL:
      return {
        counter:state.counter,
        isAdding:false

      };
    case cornAction.REMOVE:
      return {
        counter:state.counter-1
      };
    default:
      return state
  }
}