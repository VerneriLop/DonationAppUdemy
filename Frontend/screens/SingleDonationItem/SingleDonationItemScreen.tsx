import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {Image, SafeAreaView, ScrollView, Text, View} from 'react-native';

import BackButton from '../../components/BackButton/BackButton';
import Badge from '../../components/Badge/Badge';

import style from './style';
import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes';

/*type CategoryInformation = {
  categoryId: number;
  name: string;
};

type RouteObject = {
  key: string;
  name: string;
  params: {
    categoryInformation: CategoryInformation;
  };
  path: string | undefined;
};

type Props = {
  navigation: any;
  route: RouteObject;
};*/

const SingleDonationItemScreen = ({navigation, route}: any): JSX.Element => {
  const donationItemInformation = useSelector(
    (state: RootState) => state.donations.selectedDonationInformation,
  );
  const categoryInformation = route.params.categoryInformation;

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{uri: donationItemInformation?.image}}
          style={style.image}
        />
        <View style={style.badge}>
          <Badge title={categoryInformation.name} />
        </View>
        <Header type={1} title={donationItemInformation?.name as string} />
        <Text style={style.description}>
          {donationItemInformation?.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button
          title={'Donate'}
          onPress={() => navigation.navigate(Routes.Payment)}
        />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItemScreen;
