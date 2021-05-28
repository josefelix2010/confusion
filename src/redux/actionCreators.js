import * as ActionTypes from './actionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comentario) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comentario
});

export const postComment = (platoId, valoracion, autor, mensaje) => (dispatch) => {
  const nuevoComentario = {
    platoId: platoId,
    rate: valoracion,
    autor: autor,
    comment: mensaje
  }

  nuevoComentario.fecha = new Date().toISOString();

  return fetch(baseUrl + 'comentarios', {
      method: 'POST',
      body: JSON.stringify(nuevoComentario),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
      .then(response => {
        if(response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      }, error => {
        var errMess = new Error(error.message);
        throw errMess;
      })
      .then(response => response.json())
      .then(response => dispatch(addComment(response)))
      .catch(error => { 
          console.log('Post comentario: ', error.message); 
          alert("Tu comentario no puede ser posteado. \n Error: " + error.message);
        });
}

export const fetchDishes = () => (dispatch) => {
  dispatch(dishesLoading(true));

  return fetch(baseUrl + 'platos')
    .then(response => {
      if(response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    }, error => {
      var errMess = new Error(error.message);
      throw errMess;
    })
    .then(response => response.json())
    .then(platos => dispatch(addDishes(platos)))
    .catch(error => dispatch(dishesFailed(error.message)));
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
    .then(response => {
      if(response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    }, error => {
      var errMess = new Error(error.message);
      throw errMess;
    })
    .then(response => response.json())
    .then(comentarios => dispatch(addComment(comentarios)))
    .catch(error => dispatch(commentsFailed(error.message)));
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
    .then(response => {
      if(response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    }, error => {
      var errMess = new Error(error.message);
      throw errMess;
    })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
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
