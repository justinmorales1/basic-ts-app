import { combineReducers } from "redux";
import { todosReducer } from "./todos";
import { Todo } from "../actions";
import { count, countState } from "./count";

export interface StoreState {
  todos: Todo[],
  nums: countState 
}



export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
  nums: count
})