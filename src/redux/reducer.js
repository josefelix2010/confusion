import { PLATOS } from '../shared/platos';
import { LEADERS } from '../shared/leaders';
import { PROMOCIONES } from '../shared/promociones';
import { COMENTARIOS } from '../shared/comentarios';

export const initialState = {
  platos: PLATOS,
  leaders: LEADERS,
  promos: PROMOCIONES,
  comentarios: COMENTARIOS
};

export const Reducer = (state = initialState, action) => {
  return state;
};
