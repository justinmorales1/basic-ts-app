import { ActionTypes } from "../actions";
import { CountType } from "../actions/counter";



const initialState = {
  count: 0,
}


export interface countState {
  count: number
}

export const count = (state: countState = initialState, action: CountType) => {
  switch(action.type) {
    case ActionTypes.ADD:
      return {count : state.count + 1};
    case ActionTypes.SUBTRACT:
      return {count: state.count - 1};
    default:
      return state;
  }
}