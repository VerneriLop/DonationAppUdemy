import React, {useState} from 'react';
import Config from 'react-native-config';
import {Alert, SafeAreaView, ScrollView, Text, View} from 'react-native';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import style from './style';
import {RootState} from '../../redux/store';
import {useSelector} from 'react-redux';
import Button from '../../components/Button/Button';
import {
  CardForm,
  StripeProvider,
  useConfirmPayment,
} from '@stripe/stripe-react-native';

const Payment = ({navigation}: any) => {
  const donationItemInformation = useSelector(
    (state: RootState) => state.donations.selectedDonationInformation,
  );

  const stripePublishableKey = Config.STRIPE_PUBLISHABLE_KEY as string;

  const [isReady, setIsReady] = useState<boolean>(false);
  const {confirmPayment, loading} = useConfirmPayment();
  const user = useSelector((state: RootState) => state.user);

  const fetchPaymentIntentClientSecret = async () => {
    const response = await fetch(
      'http://localhost:3000/create-payment-intent',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: user.email,
          currency: 'usd',
          amount: ((donationItemInformation?.price ?? 0) as number) * 100,
        }),
      },
    );
    const {clientSecret} = await response.json();
    console.log(clientSecret);
    return clientSecret;
  };

  const handlePayment = async () => {
    const clientSecret = await fetchPaymentIntentClientSecret();
    const {error, paymentIntent} = await confirmPayment(clientSecret, {
      paymentMethodType: 'Card',
    });
    if (error) {
      Alert.alert(
        'Error has occurred with your payment',
        error.localizedMessage,
      );
    } else if (paymentIntent) {
      Alert.alert('Successfull', 'The payment was confirmed successfully');
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView contentContainerStyle={style.paymentContainer}>
        <Header title={'Making donation'} />
        <Text style={style.donationAmountDescription}>
          You are about to donate {donationItemInformation?.price}
        </Text>
        <View>
          <StripeProvider publishableKey={stripePublishableKey}>
            {/* This cardform doesn't work with android. */}
            <CardForm
              style={style.cardForm}
              onFormComplete={() => {
                setIsReady(true);
              }}
            />
          </StripeProvider>
        </View>
      </ScrollView>
      <View style={style.button}>
        <Button
          title={'Donate'}
          isDisabled={!isReady || loading}
          onPress={async () => await handlePayment()}
        />
      </View>
    </SafeAreaView>
  );
};

export default Payment;
