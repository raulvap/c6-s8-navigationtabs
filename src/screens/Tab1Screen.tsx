import React, {useContext, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {Text, View} from 'react-native';
import {styles, colores} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import TouchableIcon from '../components/TouchableIcon';
import {AuthContext} from '../context/AuthContext';

export const Tab1Screen = () => {
  // Hook para obtener el top del safearea
  const {top} = useSafeAreaInsets();
  const {
    authState: {favoriteIcon},
  } = useContext(AuthContext);

  //   // Clase 121: personalizando el Tab
  // useEffect(() => {
  //   console.log('Tab1Screen effect');
  // }, []);

  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: top + 10,
      }}>
      <Text style={styles.title}> Iconos </Text>
      {favoriteIcon && <Text>Fav Icon: {favoriteIcon}</Text>}

      <Text>
        <TouchableIcon iconName="airplane" />

        <TouchableIcon iconName="attach-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="chatbubble-ellipses" />
        <TouchableIcon iconName="images-outline" />
        <TouchableIcon iconName="leaf-outline" />
      </Text>
    </View>
  );
};
