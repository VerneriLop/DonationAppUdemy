import React from 'react';
import {useSelector} from 'react-redux';
import {Authenticated, NonAuthenticated} from './MainNavigation';
import {RootState} from '../redux/store';

const RootNavigation = () => {
  const user = useSelector((state: RootState) => state.user);
  return user.isLoggedIn ? <Authenticated /> : <NonAuthenticated />;
};

export default RootNavigation;
