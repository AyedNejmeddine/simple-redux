import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import {useDispatch} from 'react-redux';
import {login} from './features/user';

const Login = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.body}>
      <Button
        onPress={() =>
          dispatch(
            login({
              firstname: 'Ayed',
              lastname: 'Nejmeddine',
              email: 'ayednejmeddine53@gmail.com',
              address: 'Tunis',
            }),
          )
        }
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
