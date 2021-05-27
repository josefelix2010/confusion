import * as ActionTypes from './actionTypes';

export const Comentarios = (state = {
    errMess: null,
    comentarios: []
  }, action) => {
    switch (action.type) {
      case ActionTypes.ADD_COMMENTS:
        return {...state, 
          isLoading: false, 
          errMess: null, 
          COMENTARIOS: action.payload};

      case ActionTypes.COMMENTS_FAILED:
        return {...state, 
          isLoading: false, 
          errMess: action.payload, 
          comentarios: []}

      case ActionTypes.ADD_COMMENT:
        var comentario = action.payload;
        comentario.id = state.comentarios.length;
        comentario.fecha = new Date().toISOString();
        return {...state, comentarios: state.comentarios.concat(comentario)};
        
      default:
        return state;
    }
}
