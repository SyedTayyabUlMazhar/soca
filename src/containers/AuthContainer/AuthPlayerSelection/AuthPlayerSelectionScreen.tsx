import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import useAuthPlayerSelectionContainer from './AuthPlayerSelectionContainer';
import ButtonView from '@Component/ButtonView';
import LinearGradient from 'react-native-linear-gradient';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate} from '@Service/navigationService';
import H4 from '@Component/Headings/H4';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import FlatListHandler from '@Component/FlatlistHandler';
import H2 from '@Component/Headings/H2';
import {LoginContext} from '@Context/loginContext/types';
import loginContext from '@Context/loginContext';
import {setItem} from '@Service/storageService';
import {STORAGE_KEYS} from '@Constants/queryKeys';

const AuthPlayerSelectionScreen = ({route}) => {
  const {params} = route || {};
  const {data} = params;

  const {parentId} = params?.data;
  const {setUserAuthentication, setIsAuth} = useContext(
    loginContext,
  ) as LoginContext;
  const {selectionPlayerData} = useAuthPlayerSelectionContainer(parentId);
  const handlePress = item => {
    console.log(item, 'This is the itme');

    setItem(STORAGE_KEYS.TOKEN, data?.token);
    setIsAuth(true);
    // navigate(NavigationRoutes.APP_STACK.HOME, {item});
  };

  const renderItem = ({item}) => {
    console.log(item, 'itemitemitemitem');
    const {Name, PlayerID} = item || {};

    return (
      <ButtonView onPress={() => handlePress(item)}>
        <LinearGradient
          colors={['#868F96', '#596164']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.gradientContainers}>
          <H4
            text="Player Name"
            style={{
              ...Fonts.Bold(Fonts.Size.medium, Colors.WHITE),
              //   marginTop: Metrics.baseMargin,
            }}
          />
          <H4
            text={Name}
            style={{
              ...Fonts.Medium(Fonts.Size.medium, Colors.WHITE),
              marginTop: Metrics.baseMargin,
            }}
          />
        </LinearGradient>
      </ButtonView>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: Metrics.verticalScale(60),
        alignItems: 'center',
      }}>
      <H2 text="Please select a profile" />
      <FlatListHandler
        data={selectionPlayerData?.data}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
    </SafeAreaView>
  );
};

export default AuthPlayerSelectionScreen;

const styles = StyleSheet.create({
  gradientContainers: {
    padding: 20,
    // backgroundColor: '#868F96',
    marginTop: Metrics.verticalScale(30),
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: Metrics.scale(60),
  },
});
