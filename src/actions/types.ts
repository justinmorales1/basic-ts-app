import { FetchTodosAction, DeleteTodoAction } from "./todos";

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
  numbers,
  ADD =  "ADD",
  SUBTRACT = "SUBTRACT"

}


export type Actions = FetchTodosAction | DeleteTodoAction;
