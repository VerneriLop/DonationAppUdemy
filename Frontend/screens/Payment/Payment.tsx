import React from 'react';

import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import style from './style';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';
import Button from '../../components/Button/Button';

const Payment = () => {
  const donationItemInformation = useSelector(
    (state: RootState) => state.donations.selectedDonationInformation,
  );

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={style.paymentContainer}>
        <Header title={'Making donation'} />
        <Text style={style.donationAmountDescription}>
          You are about to donate {donationItemInformation?.price}
        </Text>
        <View></View>
      </ScrollView>
      <View style={style.button}>
        <Button title={'Donate'} />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
