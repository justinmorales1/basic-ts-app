import { ActionTypes } from "."

export interface AddAction {
  type: ActionTypes.ADD
}

export interface SubtractAction {
  type: ActionTypes.SUBTRACT
}

export type CountType = AddAction | SubtractAction


export const addCount = (): AddAction => {
  return {
    type: ActionTypes.ADD,
  }
}

export const subtractCount = (): SubtractAction => {
  return {
    type: ActionTypes.SUBTRACT,
  }
}