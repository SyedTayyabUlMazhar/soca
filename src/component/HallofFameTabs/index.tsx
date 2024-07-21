import { Colors } from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { StyleSheet } from 'react-native';

const Tab = createMaterialTopTabNavigator();
const {Navigator, Screen} = Tab;

interface ITopTabs {
  component?: Array<{
    name: string;
    component: React.ComponentType<any>;
    title: string;
  }>;
  data?: any;
  isTrip?: boolean;
  handleClose?: any;
  PlayerID?:any
  coachBatch?:any
}

const HallofFameTabs = ({component, data, isTrip = false, handleClose,PlayerID,coachBatch}: ITopTabs) => {
  const tabBarOptions = React.useMemo(() => {
    return {
      tabBarStyle:{
        ...styles.tabBarStyle,
      },
      tabBarLabelStyle: {
        ...styles.tabBarLabelStyle,
        color: isTrip ? Colors.VIA_COLOR : "#fff",
      },
      tabBarIndicatorStyle: {
        ...styles.tabBarIndicatorStyle,
        backgroundColor: isTrip ? Colors.VIA_COLOR : "#0A182C",
      },
      // Add the following tabBarStyle to customize the active tab
      tabBarActiveBackgroundColor: 'green',
      tabBarActiveTintColor: 'black',
      tabBarActiveBorderRadius: 100,
      // tabBarAndroidRipple: {borderless: false},
    };
  }, [isTrip]);

  return (
    <Navigator screenOptions={tabBarOptions}>
      {component?.map(
        (
          item: {
            name: string;
            component: React.ComponentType<any>;
            title: string;
          },
          index: number,
        ) => {
          const {name, component} = item;
          let initialParams;
          if (data) {
            initialParams = {
              data: data[index],
              handleClose: handleClose,
            };
          }


          return (
            <Screen
              key={`${index}+${name}`}
              name={name}
              component={component}
              initialParams={coachBatch}
            />
          );
        },
      )}
    </Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: Colors.TRANSPARENT,
    elevation: 0,
    borderRadius: 100,
},
  tabBarLabelStyle: {
    textTransform: 'none',
    ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.WHITE),
  },
  tabBarIndicatorStyle: {
    paddingVertical:22,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#00B2FF",
  },
});

export default HallofFameTabs;
