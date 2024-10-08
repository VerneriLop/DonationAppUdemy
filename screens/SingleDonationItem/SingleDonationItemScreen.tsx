import React from 'react';

import style from './style';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

const SingleDonationItemScreen = () => {
  const donationItemInformation = useSelector(
    (state: RootState) => state.donations.selectedDonationInformation,
  );
  console.log(donationItemInformation);
  return null;
};

export default SingleDonationItemScreen;
