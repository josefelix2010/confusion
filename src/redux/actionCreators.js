import * as ActionTypes from './actionTypes';
import { baseUrl } from '../shared/baseUrl';

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

  return fetch(baseUrl + 'platos')
    .then(response => response.json())
    .then(platos => dispatch(addDishes(platos)));
};

export const dishesLoading = () => ({
  type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errMess) => ({
  type: ActionTypes.DISHES_FAILED,
  payload: errMess
});

export const addDishes = (plato) => ({
  type: ActionTypes.ADD_DISHES,
  payload: plato
});

export const fetchComments = () => (dispatch) => {
  return fetch(baseUrl + 'comentarios')
    .then(response => response.json())
    .then(comentarios => dispatch(addComment(comentarios)));
};

export const commentsFailed = (errMess) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMess
})


export const addCOmments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments
})

export const fetchPromos = () => (dispatch) => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + 'promociones')
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)));
};

export const promosLoading = () => ({
  type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errMess) => ({
  type: ActionTypes.PROMOS_FAILED,
  payload: errMess
});

export const addPromos = (promo) => ({
  type: ActionTypes.ADD_PROMOS,
  payload: promo
});
