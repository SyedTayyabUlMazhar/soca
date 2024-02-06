import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useContext} from 'react';
import loginContext from '@Context/loginContext';
import {LoginContext} from '@Context/loginContext/types';
import usePlayerSelectionContainer from './PlayerSelectionContainer';
import H2 from '@Component/Headings/H2';
import Metrics from '@Utility/Metrics';
import H1 from '@Component/Headings/H1';
import FlatListHandler from '@Component/FlatlistHandler';
import LinearGradient from 'react-native-linear-gradient';
import H4 from '@Component/Headings/H4';
import Fonts from '@Theme/Fonts';
import {Colors} from '@Theme/Colors';
import ButtonView from '@Component/ButtonView';
import {navigate} from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {DeleteIcon, DeletedAccontIcon, Logout, LogoutSvg} from '@Asset/logo';
import {STORAGE_KEYS} from '@Constants/queryKeys';
import {getItem, setItem} from '@Service/storageService';
import SpinnerLoader from '@Component/SmallLoader';
import CustomModal from '@Component/CustomModal/CustomModal';
import H3 from '@Component/Headings/H3';

const PlayerSelection = () => {
  const {handleLogoutUser} = useContext(loginContext) as LoginContext;
  const [isDeleteAccountVisible, setIsDeleteAccountVisible] =
    React.useState(false);
  const [isDeleteUserAccountVisible, setIsDeleteUserAccountVisible] =
    React.useState(false);

  const parentId = getItem(STORAGE_KEYS.PARENTID);

  const {selectionPlayerData, isLoading, deleteAccount} =
    usePlayerSelectionContainer(parentId);

  const changeDeleteModalVisible = isDelete => {
    if (isDelete == true) {
      setIsDeleteAccountVisible(!isDeleteAccountVisible);
      handleLogoutUser();
    } else {
      setIsDeleteAccountVisible(!isDeleteAccountVisible);
    }
  };

  const changeDeleteAccountModalVisible = isDelete => {
    if (isDelete == true) {
      setIsDeleteUserAccountVisible(!isDeleteUserAccountVisible);
      deleteAccount({parentId});
    } else {
      setIsDeleteUserAccountVisible(!isDeleteUserAccountVisible);
    }
  };

  const renderItem = ({item}) => {
    const {Player_Name, PlayerID} = item || {};

    return (
      <ButtonView
        onPress={() =>
          navigate(NavigationRoutes.APP_STACK.BOTTOM_TABS, {item})
        }>
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
            text={Player_Name}
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
    <LinearGradient
      colors={['#09203F', '#537895']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={{flex: 1, paddingVertical: Metrics.doubleBaseMargin}}>
      <View
        style={{
          alignItems: 'center',
          marginVertical: Metrics.verticalScale(40),
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <H2 text="Please select a profile" style={{color: Colors.WHITE}} />
          <ButtonView
            onPress={() => setIsDeleteAccountVisible(true)}
            style={{marginLeft: Metrics.doubleBaseMargin}}>
            <Logout />
          </ButtonView>
        </View>

        {isLoading ? (
          <SpinnerLoader
            size={'large'}
            containerStyles={{marginTop: Metrics.doubleBaseMargin}}
          />
        ) : (
          <FlatListHandler
            data={selectionPlayerData?.data}
            renderItem={renderItem}
            keyExtractor={item => item?.id}
          />
        )}
        <CustomModal
          changeDeleteModalVisible={changeDeleteModalVisible}
          setIsDeleteAccountVisible={setIsDeleteAccountVisible}
          isDeleteAccountVisible={isDeleteAccountVisible}
          title={'Logout'}
          desc={'Are you sure you want to logout?'}
        />
      </View>
      <ButtonView
        onPress={() => setIsDeleteUserAccountVisible(true)}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          alignSelf: 'center',
          marginTop:'auto',
          marginBottom: 12
        }}>
        <DeleteIcon />
        <H3
          text="Delete Account"
          style={{
            color: Colors.WHITE,
            marginHorizontal: Metrics.baseMargin,
          }}
        />
      </ButtonView>
      <CustomModal
        changeDeleteModalVisible={changeDeleteAccountModalVisible}
        setIsDeleteAccountVisible={setIsDeleteUserAccountVisible}
        isDeleteAccountVisible={isDeleteUserAccountVisible}
        title={'Delete Account'}
        desc={'Are you sure you want to Delete Account?'}
      />
    </LinearGradient>
  );
};

export default PlayerSelection;

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
