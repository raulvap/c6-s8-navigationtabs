import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
// Clase 124: usa el logbox para ignorar los logs
import {LogBox, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colores} from '../theme/appTheme';
// Instalamos los iconos: (clase 126)
import Icon from 'react-native-vector-icons/Ionicons';

LogBox.ignoreLogs(['Sending']);

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  // Clase 125: usamos el hook para utilizar el safeAreaView
  const {top: paddingTop} = useSafeAreaInsets();

  return (
    <Tab.Navigator
      // le damos el padding top del hook de safe area
      style={{paddingTop}}
      sceneContainerStyle={{
        backgroundColor: '#eeeeee',
      }}
      tabBarOptions={{
        pressColor: colores.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colores.primary,
        },
        style: {
          shadowColor: 'transparent',
          elevation: 0,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused}) => {
          let iconName: string = '';
          switch (route.name) {
            case 'Chat':
              iconName = 'chatbubble-ellipses';

              break;

            case 'Contacts':
              iconName = 'people';
              break;

            case 'Albums':
              iconName = 'albums';
              break;
          }

          return <Icon name={iconName} size={20} color={color} />;
        },
      })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Albums" component={AlbumsScreen} />
    </Tab.Navigator>
  );
};
