import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './Routes';
import {Home} from '../screens/Home/Home';
import SingleDonationItemScreen from '../screens/SingleDonationItem/SingleDonationItemScreen';
import Login from '../screens/Login/Login';
import Registration from '../screens/Registration/Registration';

const Stack = createStackNavigator();

const MainNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Login}
      screenOptions={{header: () => null, headerShown: false}}>
      <Stack.Screen name={Routes.Login} component={Login} />
      <Stack.Screen name={Routes.Registration} component={Registration} />
      <Stack.Screen name={Routes.Home} component={Home} />
      <Stack.Screen
        name={Routes.SingleDonationItemScreen}
        component={SingleDonationItemScreen}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
