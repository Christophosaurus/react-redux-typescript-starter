export enum DefaultActions {
  DO_SOMETHING = 'DO_SOMETHING',
  DO_SOMETHING_ELSE = 'DO_SOMETHING_ELSE',
}

export interface IDoSomethingAction {
  type: DefaultActions.DO_SOMETHING,
  payload: string[]
}

export interface IDoSomethingElseAction {
  type: DefaultActions.DO_SOMETHING_ELSE,
  payload: string[]
}


export type DefaultActionTypes = IDoSomethingAction |
  IDoSomethingElseAction;