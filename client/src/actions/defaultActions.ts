import { Dispatch } from 'redux';
import { IDoSomethingAction, DefaultActions, IDoSomethingElseAction } from "./types/defaultActions";

export const startDoSomething = () => async ( dispatch: Dispatch<IDoSomethingAction>) => {
  return dispatch({
    type: DefaultActions.DO_SOMETHING,
    payload: ['Doing', 'Something']
  });
};

export const startDoingSomethingElse = () => async ( dispatch: Dispatch<IDoSomethingElseAction>) => {
  return dispatch({
    type: DefaultActions.DO_SOMETHING_ELSE,
    payload: ['Doing', 'Something', 'Else']
  });
};