import { Todo, ActionTypes, Actions } from '../actions';


export const todosReducer = (state: Todo[] =  [], action: Actions) => {
  switch(action.type) {
    case ActionTypes.fetchTodos:
      return action.paylod;
    case ActionTypes.deleteTodo:
      return state.filter((todo: Todo) => todo.id !== action.payload);
    default:
      return state;
  }
}