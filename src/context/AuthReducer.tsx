import {AuthState} from './AuthContext';

/* Esto viene del AuthContext, es el tipado:
 export interface AuthState {
     isLoggedIn: boolean;
     username?: string;
     favoriteIcon?: string;
   }
*/

// Definimos los types del reducer:
// 1. Clase 140: creamos un 2do tipo de acción y refactorizamos, luego lo agregamos al switch
type AuthAction =
  | {type: 'signIn'}
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'logout'}
  | {type: 'changeUserName'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  // Clase 136: authReducer es utilizar una función pura para despachar las modificaciones al state
  // siempre debe regresar algo del tipo estado inicial

  switch (action.type) {
    //   Clase 137: disparamos acciones
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'Usuario Loggeado',
      };

    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };

    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined,
      };

    case 'changeUserName': {
      return {
        ...state,
        username: action.payload,
      };
    }

    default:
      return state;
  }
};
