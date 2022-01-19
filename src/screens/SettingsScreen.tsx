import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import {AuthContext} from '../context/AuthContext';
import {styles, colores} from '../theme/appTheme';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  // Clase 135: para obtener info del context, usamos el hook de useContext
  const {authState} = useContext(AuthContext);

  return (
    <View
      style={{
        ...styles.globalMargin,
        marginTop: insets.top + 20,
      }}>
      <Text style={styles.title}>Settings Screen</Text>

      <Text>{JSON.stringify(authState, null, 3)}</Text>

      <View style={styles.verticalMargin}>
        <Text style={styles.title}>Icono favorito:</Text>
        {authState.favoriteIcon && (
          <Icon
            name={authState.favoriteIcon}
            size={80}
            color={colores.primary}
          />
        )}
      </View>
    </View>
  );
};
