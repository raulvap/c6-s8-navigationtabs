import React, {useContext} from 'react';
import {Text, View, Button} from 'react-native';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const ContactsScreen = () => {
  // para acceder a la funciòn de Sign In del Context:
  const {
    signIn,
    authState: {isLoggedIn, username},
    logout,
  } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <View style={styles.verticalMargin}>
        <Text style={styles.title}>ContactsScreen</Text>
      </View>
      <Text>{username}</Text>
      <View style={styles.verticalMargin}>
        {/* Esta es una forma de agregarlo: 
        {!isLoggedIn && <Button title="Sign In" onPress={signIn} />}
        */}
        {!isLoggedIn ? (
          <Button title="Sign In" onPress={signIn} />
        ) : (
          <Button title="Sign Out" onPress={logout} />
        )}
      </View>
    </View>
  );
};
