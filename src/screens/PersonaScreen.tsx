import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext, useEffect} from 'react';
import {View, Text} from 'react-native';

import {RootStackParams} from '../navigator/StackNavigator';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

// interface RouterParams {
//     id: number;
//     nombre: string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {}

export const PersonaScreen = ({route, navigation}: Props) => {
  // const params = route.params as RouterParams;
  const params = route.params;
  //   console.log(params);

  const {
    changeUserName,
    authState: {username},
  } = useContext(AuthContext);

  useEffect(() => {
    navigation.setOptions({
      title: params.nombre,
    });
  }, []);

  useEffect(() => {
    changeUserName(params.nombre);
  }, []);

  return (
    <View>
      <View style={styles.globalMargin}>
        <Text style={styles.title}>{JSON.stringify(params, null, 3)}</Text>
      </View>
      <View style={styles.globalMargin}>
        <Text style={styles.title}>{username}</Text>
      </View>
    </View>
  );
};
