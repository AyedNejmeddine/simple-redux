/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Login from './Login';
import Profile from './Profile';

const App = () => {
  return (
    <View style={styles.body}>
      <Text style={styles.text}>Welcome to react native redux</Text>
      <Profile />
      <Login />
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
    marginBottom: 50,
  },
});

export default App;
