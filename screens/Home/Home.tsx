import React from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Header from '../../components/Header/Header';
import globalStyle from '../../assets/styles/globalStyle';
import {RootState} from '../../redux/store';
import {updateFirstName} from '../../redux/reducers/User';

export const Home = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  console.log(user);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={user.firstName + ' ' + user.lastName} />
      <Pressable onPress={() => dispatch(updateFirstName({firstName: 'V'}))}>
        <Text>Press me to change first name</Text>
      </Pressable>
    </SafeAreaView>
  );
};
