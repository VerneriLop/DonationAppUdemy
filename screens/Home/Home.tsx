import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import Header from '../../components/Header/Header';
import globalStyle from '../../assets/styles/globalStyle';
import {RootState} from '../../redux/store';

export const Home = (): JSX.Element => {
  const user = useSelector((state: RootState) => state.user);
  console.log(user);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={user.firstName + ' ' + user.lastName} />
    </SafeAreaView>
  );
};
