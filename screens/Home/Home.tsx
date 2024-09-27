import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import Header from '../../components/Header/Header';

import globalStyle from '../../assets/styles/globalStyle';
import Button from '../../components/Button/Button';

export const Home = (): JSX.Element => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title="Azzari A." type={1} />
      <Button
        title="Donate"
        onPress={() => {
          console.log('You just pressed me!');
        }}
      />
      <Button title="Donate" isDisabled />
    </SafeAreaView>
  );
};
