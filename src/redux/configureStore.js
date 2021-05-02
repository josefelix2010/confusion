import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Platos } from './platos';
import { Comentarios } from './comentarios';
import { Leaders } from './leaders';
import { Promociones } from './promociones';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      platos: Platos,
      comentarios: Comentarios,
      leaders: Leaders,
      promos: Promociones,
      ...createForms({
        feedback: InitialFeedback
      })
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};
