import { createStore, combineReducers } from 'redux';
import { Platos } from './platos';
import { Comentarios } from './comentarios';
import { Leaders } from './leaders';
import { Promociones } from './promociones';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      platos: Platos,
      comentarios: Comentarios,
      leaders: Leaders,
      promos: Promociones
    })
  );

  return store;
};
