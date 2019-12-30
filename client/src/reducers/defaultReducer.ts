import { Reducer } from 'redux';

import { DefaultActions, DefaultActionTypes } from '../actions/types/defaultActions';

export interface IDefaultReducerState {
  // readonly defaultProperty: ISomeProperty[];
  loading: boolean;
  errors: Error[];
}

const initialDefaultReducerState: IDefaultReducerState = {
  loading: false,
  errors: []
}

export const defaultReducer: Reducer<IDefaultReducerState, DefaultActionTypes> = ( 
  state: IDefaultReducerState = initialDefaultReducerState,
  action
 ) => {
   switch(action.type) {
     case DefaultActions.DO_SOMETHING:
       return {
         ...state,
        //  someState: action.payload
         loading: true
       }
       default:
         return state;
   }
 }