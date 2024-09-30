import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import Header from '../../components/Header/Header';

import globalStyle from '../../assets/styles/globalStyle';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';
import Badge from '../../components/Badge/Badge';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

export const Home = (): JSX.Element => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title="Azzari A." type={1} />
      <Tab title="Highlight" />
      <Tab title="Highlight" isInactive />
      <Badge title="Environment" />
      <FontAwesomeIcon icon={faSearch} />
    </SafeAreaView>
  );
};
