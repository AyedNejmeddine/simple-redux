import React from 'react';
import {StyleSheet, View, Button} from 'react-native';

const Login = () => {
  return (
    <View style={styles.body}>
      <Button
        onPress={() => console.warn('button')}
        title="Login"
        color="#841584"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    marginTop: 50,
  },
});

export default Login;
