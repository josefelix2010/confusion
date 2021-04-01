import * as ActionTypes from './actionTypes';

export const addComment = (platoId, valoracion, autor, mensaje) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: {
    platoId: platoId,
    rate: valoracion,
    comment: mensaje,
    autor: autor
  }
});
