import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function Profile() {
  return (
    <View>
      <Text style={styles.text}>firstname : </Text>
      <Text style={styles.text}>lastname : </Text>
      <Text style={styles.text}>email : </Text>
      <Text style={styles.text}>address : </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffff0088',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
