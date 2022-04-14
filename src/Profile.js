import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useSelector} from 'react-redux';

export default function Profile() {
  const userState = useSelector(state => state.user);
  return (
    <View>
      <Text style={styles.text}>firstname : {userState.firstname}</Text>
      <Text style={styles.text}>lastname : {userState.lastname}</Text>
      <Text style={styles.text}>email : {userState.email}</Text>
      <Text style={styles.text}>address : {userState.address}</Text>
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
