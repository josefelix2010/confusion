import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Platos } from './platos';
import { Comentarios } from './comentarios';
import { Leaders } from './leaders';
import { Promociones } from './promociones';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      platos: Platos,
      comentarios: Comentarios,
      leaders: Leaders,
      promos: Promociones
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
