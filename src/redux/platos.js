import * as ActionTypes from './actionTypes';

export const Platos = (state = {
    isLoading: true,
    errMess: null,
    platos: []
  }, action) => {
  switch (action.type) {
    case ActionTypes.ADD_DISHES:
      return {...state, 
        isLoading: false, 
        errMess: null, 
        platos: action.payload}

    case ActionTypes.DISHES_LOADING:
      return {...state, 
        isLoading: true, 
        errMess: null, 
        platos: []}

    case ActionTypes.DISHES_FAILED:
      return {...state, 
        isLoading: false, 
        errMess: action.payload, 
        platos: []}

    default:
      return state
  }
}
