import React from 'react';
import style from './style';
import {Image, View} from 'react-native';
import Badge from '../Badge/Badge';
import Header from '../Header/Header';

type Props = {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
};

const SingleDonationItem = (props: Props) => {
  return (
    <View>
      <View>
        <View style={style.badge}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image
          resizeMode={'contain'}
          source={{uri: props.uri}}
          style={style.image}
        />
      </View>
      <View style={style.donationInformation}>
        <Header title={props.donationTitle} type={3} color={'#0A043C'} />
        <View style={style.price}>
          <Header
            title={'$' + props.price.toFixed(2)}
            type={3}
            color={'#156CF7'}
          />
        </View>
      </View>
    </View>
  );
};

export default SingleDonationItem;
