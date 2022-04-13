import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Login = () => {
  return (
    <View>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff0088',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default Login;
