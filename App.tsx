import 'react-native-gesture-handler';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import { StackNavigator } from './src/navigator/StackNavigator';
// import { MenuLateralBasico } from './src/navigator/MenuLateralBasico';
import {MenuLateral} from './src/navigator/MenuLateral';
import {AuthProvider} from './src/context/AuthContext';
// import { Tabs } from './src/navigator/Tabs';

const App = () => {
  return (
    <AppState>
      <NavigationContainer>
        {/* <StackNavigator /> */}
        {/* <MenuLateralBasico /> */}
        <MenuLateral />
        {/* <Tabs /> */}
      </NavigationContainer>
    </AppState>
  );
};

// Clase 134: creamos el context que va a manejar el estado de la aplicación:
const AppState = ({children}: {children: JSX.Element}) => {
  // El tipado le ponemos que los hijos van a ser varios [] elementos JSX
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;
