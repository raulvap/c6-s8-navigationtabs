import React, {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';

// definimos un context: clase 134

// 1. Definir el tipado del State
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// 2. Deifinimos un objeto con el estado inicial con el tipo definido anteriormente
const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

// 3. Creamos otra interface para decirle a React cómo luce el context y
// que métodos adicionales tiene: (por ejemplo la función de SignIn)
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  logout: () => void;
  changeUserName: (userName: string) => void;
}

// 4. Creamos el Context con el tipo de las props que creamos en 3.
export const AuthContext = createContext({} as AuthContextProps);

// 5. Creamos el Provider, que es componente que va a contener  y proveer el estado de la app:
// este es un High Order Component porque va a tener cierto hijos
export const AuthProvider = ({children}: any) => {
  // Clase 136: vamos a usar el hook de useReducer
  // este sirve como useState, pero cuando el estado de la app será más grande y complejo
  //   const [state, dispatch] = useReducer(reducer, initialState, init)
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    // generamos el dispatch:
    dispatch({
      type: 'signIn',
    });
  };

  // Creamos la función para el favIcon: (clase 140)
  const changeFavoriteIcon = (iconName: string) => {
    dispatch({
      type: 'changeFavIcon',
      payload: iconName,
    });
  };
  // **** RECUERDA AGREGAR LA FUNCIÒN AL CONTEXT Y AL INTERFACE DEL MISMO MÀS ARRIBA 3.

  // Función para logout
  const logout = () => {
    dispatch({
      type: 'logout',
    });
  };

  const changeUserName = (userName: string) => {
    dispatch({
      type: 'changeUserName',
      payload: userName,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        //   el provider debe retornar algo del tipo que definimos en 3 y por ende en 2
        authState,
        signIn,
        changeFavoriteIcon,
        logout,
        changeUserName,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

// 6. este AuthProvider lo utilizamos en el Componente Superior: App.tsx
