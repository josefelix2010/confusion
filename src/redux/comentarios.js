import { COMENTARIOS } from '../shared/comentarios';
import * as ActionTypes from './actionTypes';

export const Comentarios = (state = COMENTARIOS, action) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENT:
      var comentario = action.payload;
      comentario.id = state.length;
      comentario.fecha = new Date().toISOString();
      console.log("Comentario: ",comentario);
      return state.concat(comentario);
      break;
    default:
      return state;
  }
}
