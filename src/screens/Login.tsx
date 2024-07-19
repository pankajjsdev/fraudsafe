import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
// import {loginUser} from '../redux/actions/auth/login';
import {setUser} from '../redux/reducers/auth/login';

const Login = () => {
  const store = useSelector((state: any) => state.login);
  const dispatch = useDispatch();

  console.log('store', store);

  const handleLogin = () => {
    // const userData = {name: 'John Doe', email: 'john.doe@example.com'};
    dispatch(setUser());
  };

  useEffect(() => {
    handleLogin();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>{JSON.stringify(store)}</Text>
    </View>
  );
};

export default Login;
