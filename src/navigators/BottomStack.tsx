import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {Image, Platform, StyleSheet, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Card1,
  Card2,
  HOF,
  HomeIconBot,
  MalePng,
  RewardIcon,
  Services,
  TiersIcon,
  account,
} from '../assets/logo';

import NavigationRoutes from './NavigationRoutes';
import Profile from '@Container/AppContainer/Profile/Profile';
import HomeScreen from '@Container/AppContainer/Home/HomeScreen';
import {Colors} from '@Theme/Colors';
import TierScreen from '@Container/AppContainer/Tiers/TierScreen';
import RewardScreen from '@Container/AppContainer/Rewards/RewardScreen';
import ServicesScreen from '@Container/AppContainer/Services/index';
import H6 from '@Component/Headings/H6';
import ProfileSetting from '@Container/AppContainer/ProfileSetting/ProfileSetting';
import Performance from '@Container/AppContainer/AllPerformance/Performance';
import HallOfFame from '@Container/AppContainer/HallOfFame';
const Tab = createBottomTabNavigator();

const RenderTabBarIcon = ({source, color, focused}) => {
  return (
    <View style={styles.tabBarIconWrapper}>
      {focused && (
  
        <View
          style={[
            styles.tabBarShape,
            {top: Platform.OS === 'android' ? -12 : -19},
          ]}
        />
        
      )}

      <Image
        source={source}
        style={{
          width: '100%',
          resizeMode: 'contain',
          flex: 1,
          tintColor: color,
        }}
      />

    </View>
  );
};

const tabRoutes = [
  {
    name: NavigationRoutes.APP_STACK.HOME,
    component: HomeScreen,
    options: {
      tabBarIcon: ({color, focused}) => (
        <RenderTabBarIcon
          source={HomeIconBot}
          color={color}
          focused={focused}
        />
      ),
      title: 'Home',
    },
  },
  {
    name: NavigationRoutes.APP_STACK.HALL_OF_FAME,
    component: HallOfFame,
    options: {
      tabBarIcon: ({color, focused}) => (
        <RenderTabBarIcon source={HOF} color={color} focused={focused} />
      ),
      title: 'Hall Of Fame',
    },
  },

  {
    name: NavigationRoutes.APP_STACK.ALL_PERFORMANCE,
    component: Performance,
    options: {
      tabBarIcon: ({color, focused}) => (
        <RenderTabBarIcon source={RewardIcon} color={color} focused={focused} />
      ),
      title: 'Performance',
    },
  },
  {
    name: NavigationRoutes.APP_STACK.PROFILE_SETTING,
    component: ProfileSetting,
    options: {
      tabBarIcon: ({color, focused}) => (
        <RenderTabBarIcon source={MalePng} color={color} focused={focused} />
      ),
      title: 'Profile',
    },
  },
];

const BottomTabs = props => {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#0A182C',
          alignSelf: 'center',
          shadowColor: Colors.BLACK,
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,
          elevation: 8,
          width: '100%',
          height:
            Platform.OS === 'android'
              ? 69
              : 85 - insets.bottom + (insets.bottom ? +40 : 0),
          paddingTop:
            insets.bottom !== 0 ? (Platform.OS === 'android' ? 10 : 20) : 0,
        },
        tabBarLabelStyle: {
          includeFontPadding: false,
          fontFamily: 'Montserrat-Medium',
          fontSize: 10,
          marginTop: 4,
          position: 'relative',
          top: Platform.OS === 'android' ? -15 : 0,
        },
        tabBarItemStyle: {
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 0,
        },
        tabBarAllowFontScaling: false,
        tabBarActiveTintColor: Colors.WHITE,
        tabBarInactiveTintColor: '#ADB0C2',
      }}
      sceneContainerStyle={{
        backgroundColor: '#F7F7F7',
      }}
      initialRouteName={NavigationRoutes.APP_STACK.HOME}>
      {tabRoutes.map(({name, component, options}) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={options}
          initialParams={{item: props?.route?.params?.item}}
        />
      ))}
    </Tab.Navigator>
  );
};
export default BottomTabs;

const styles = StyleSheet.create({
  tabBarIconWrapper: {
    width: 30,
    height: 20,
    position: 'relative',
  },
  tabBarShape: {
    // width: '100%',
    // height: '100%',
    paddingHorizontal: 50,
    paddingVertical: 22,
    marginTop: 6,
    alignSelf: 'center',
    position: 'absolute',
    backgroundColor: '#040C17', // Color of the border
    bottom: 0,
    borderRadius: 20,
    borderWidth: 1,
    borderTopColor: '#00B2FF',
    borderBottomColor: '#00B2FF',
    borderRightColor: '#00B2FF',
    borderLeftColor: '#00B2FF',

    // borderBottomRightRadius: 15, // Adjust border radius as needed
    // borderBottomLeftRadius: 15, // Adjust border radius as needed
  },
});
