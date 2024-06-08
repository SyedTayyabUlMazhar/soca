import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import useStartupContainer from './containers/startupContainer/StartupContainer';
import AppStack from './navigators/AppStack';
import AuthStack from './navigators/AuthStack';
import {navigationRef} from './services/navigationService';
import { FirebaseNotification } from '@Service/NotificationServices/NotificationServices';

export default function AuthNavigator() {
  const {isAuth} = useStartupContainer();

  const navigationOnReady = () => {
    console.log('On Ready');
    if (!FirebaseNotification.initiated) {
      FirebaseNotification.createNotificationListeners();
    }
  };

  return (
    <NavigationContainer
    ref={navigationRef}
    onReady={() => navigationOnReady()}>
      {isAuth ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
