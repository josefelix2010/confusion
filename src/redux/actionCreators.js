import * as ActionTypes from './actionTypes';
import { PLATOS } from '../shared/platos';

export const addComment = (platoId, valoracion, autor, mensaje) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    platoId: platoId,
    rate: valoracion,
    comment: mensaje,
    autor: autor
  }
});

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  setTimeout(() => {
    dispatch(addDishes(PLATOS));
  }, 2000);
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errMess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errMess
});

export const addDishes = (plato) => ({
  type: ActionTypes.ADD_DISHES,
  payload: plato
});
