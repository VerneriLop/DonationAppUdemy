import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {SafeAreaView, ScrollView} from 'react-native';

import BackButton from '../../components/BackButton/BackButton';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';

const SingleDonationItemScreen = ({navigation}: any): JSX.Element => {
  const donationItemInformation = useSelector(
    (state: RootState) => state.donations.selectedDonationInformation,
  );

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleDonationItemScreen;
