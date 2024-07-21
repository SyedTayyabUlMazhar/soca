import AppHeader from '@Component/Header/AppHeader';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from '@Theme/Colors';
import * as React from 'react';
import NavigationRoutes from './NavigationRoutes';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName={NavigationRoutes.AUTH_STACK.LOGIN}
      screenOptions={{
        gestureEnabled: false,
        animation: "slide_from_right",
        header: props => {
          let state = props.navigation.getState();
          let routeIndex = state?.routes[state?.index]?.state?.index;
          let routeName = state.routes[state.index].name;
          return (
            <AppHeader
              {...props}
              routeName={routeName}
              routeIndex={routeIndex}
            />
          );
        },
        contentStyle: {
          backgroundColor: Colors.WHITE_FOUR,
        },
      }}>
      <Stack.Screen
        options={{title: 'Auth Login', headerShown: false}}
        name={NavigationRoutes.AUTH_STACK.LOGIN}
        getComponent={() =>
          require('@Container/AuthContainer/AuthLogin/AuthLoginScreen').default
        }
      />
          <Stack.Screen
        options={{title: 'Forgot Password', headerShown: false}}
        name={NavigationRoutes.AUTH_STACK.FORGET_PASSWORD}
        getComponent={() =>
          require('@Container/AuthContainer/ForgotPasswordContainer').default
        }
      />
      <Stack.Screen
        options={{title: 'Auth Signup', headerShown: false}}
        name={NavigationRoutes.AUTH_STACK.SIGNUP}
        getComponent={() =>
          require('@Container/AuthContainer/AuthSignup/AuthSignup').default
        }
      />
      <Stack.Screen
        options={{title: 'Auth Player Selection', headerShown: false}}
        name={NavigationRoutes.AUTH_STACK.PLAYER_SELECTION}
        getComponent={() =>
          require('@Container/AuthContainer/AuthPlayerSelection/AuthPlayerSelectionScreen')
            .default
        }
      />
      <Stack.Screen
        options={{title: 'OTP', headerShown: false}}
        name={NavigationRoutes.AUTH_STACK.OTP}
        getComponent={() =>
          require('@Container/AuthContainer/OTP').default
        }
      />
          <Stack.Screen
        options={{title: 'Reset Password', headerShown: false}}
        name={NavigationRoutes.AUTH_STACK.RESET_PASSWORD}
        getComponent={() =>
          require('@Container/AuthContainer/ResetPassword').default
        }
      />
               <Stack.Screen
        options={{title: 'Guest', headerShown: false}}
        name={NavigationRoutes.APP_STACK.GUEST}
        getComponent={() =>
          require('@Container/AppContainer/Guest').default
        }
      />
            <Stack.Screen
        options={{title: 'Hall Of Fame', headerShown: false}}
        name={NavigationRoutes.APP_STACK.HALL_OF_FAME}
        getComponent={() =>
          require('@Container/AppContainer/HallOfFame').default
        }
      />
         <Stack.Screen
        options={{title: 'Services', headerShown: false}}
        name={NavigationRoutes.APP_STACK.SERVICES}
        getComponent={() =>
          require('@Container/AppContainer/Services').default
        }
      />
      <Stack.Screen
        options={{title: 'About', headerShown: false}}
        name={NavigationRoutes.APP_STACK.ABOUT}
        getComponent={() =>
          require('@Container/AppContainer/About/About').default
        }
      />
    </Stack.Navigator>
  );
}
