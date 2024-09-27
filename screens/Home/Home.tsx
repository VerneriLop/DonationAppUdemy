import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import Header from '../../components/Header/Header';

import globalStyle from '../../assets/styles/globalStyle';

export const Home = (): JSX.Element => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title="Azzari A." type={1} />
      <Header title="Azzari A." type={2} />
      <Header title="Azzari A." type={3} />
    </SafeAreaView>
  );
};
