import React, {useEffect} from 'react';
import {Button, Text, View, TouchableOpacity} from 'react-native';
// import { StackScreenProps } from '@react-navigation/stack'
import {DrawerScreenProps} from '@react-navigation/drawer';
import {styles, colores} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

// interface Props extends StackScreenProps<any, any>{};
interface Props extends DrawerScreenProps<any, any> {}

export const Pagina1Screen = ({navigation}: Props) => {
  useEffect(() => {
    // para regresar un ìcono de tipo hamburguesa (clase 128)
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{
            marginLeft: 10,
          }}
          onPress={() => navigation.toggleDrawer()}>
          <Icon name="menu-outline" color={colores.primary} size={35} />
        </TouchableOpacity>
      ),
    });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen </Text>

      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text
        style={{
          marginVertical: 20,
          fontSize: 20,
        }}>
        {' '}
        Navegar con argumentos
      </Text>

      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#075494',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 1,
              nombre: 'Raul',
            })
          }>
          <Icon name="body" color="white" size={35} />
          <Text style={styles.botonGrandeTexto}>Raul</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#ff4727',
          }}
          onPress={() =>
            navigation.navigate('PersonaScreen', {
              id: 2,
              nombre: 'Karla',
            })
          }>
          <Icon name="woman" color="white" size={35} />
          <Text style={styles.botonGrandeTexto}>Karla</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
