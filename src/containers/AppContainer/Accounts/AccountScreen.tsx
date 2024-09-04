import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import Metrics from '@Utility/Metrics';
import H2 from '@Component/Headings/H2';
import H1 from '@Component/Headings/H1';
import {ChevronSvg, LogoutSvg, PaymentsSvg, PerformanceSvg} from '@Asset/logo';
import H6 from '@Component/Headings/H6';
import H5 from '@Component/Headings/H5';
import ButtonView from '@Component/ButtonView';
import loginContext from '@Context/loginContext';
import {LoginContext} from '@Context/loginContext/types';
import React, {useContext} from 'react';
import CustomFlatListSeperator from '@Component/CustomFlatListSeperator/CustomFlatListSeperator';
import CustomModal from '@Component/CustomModal/CustomModal';
import {Colors} from '@Theme/Colors';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import {navigate} from '@Service/navigationService';

const AccountScreen = ({route}) => {

  const {player_reg_no: PlayerID, Player_Name} = route?.params?.item;
  const {handleLogoutUser} = useContext(loginContext) as LoginContext;
  const [isDeleteAccountVisible, setIsDeleteAccountVisible] =
    React.useState(false);

  console.log(PlayerID, 'this is player Id from accounts');

  const changeDeleteModalVisible = isDelete => {
    if (isDelete == true) {
      setIsDeleteAccountVisible(!isDeleteAccountVisible);
      handleLogoutUser();
    } else {
      setIsDeleteAccountVisible(!isDeleteAccountVisible);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: Metrics.verticalScale(50),
          }}>
          <H1 text="Profile" />

          <ButtonView
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: Metrics.doubleBaseMargin,
            }}>
            <ButtonView
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => {
                navigate(NavigationRoutes.APP_STACK.PERFORMANCE, {
                  PlayerID,
                  Player_Name,
                });
              }}>
              <PerformanceSvg />
              <H5
                text="Performance"
                style={{marginHorizontal: Metrics.baseMargin}}
              />
            </ButtonView>
            {/* <ChevronSvg /> */}
          </ButtonView>

          <ButtonView
              onPress={() => {
                navigate(NavigationRoutes.APP_STACK.ALL_PERFORMANCE);
              }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: Metrics.baseMargin,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <PerformanceSvg />
              <H5
                text="All Performance"
                style={{marginHorizontal: Metrics.baseMargin}}
              />
            </View>
          </ButtonView>

          {/* <View style={styles.bottomLine} /> */}

          {/* <ButtonView
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: Metrics.doubleBaseMargin,
            }}>
            <ButtonView
              style={{flexDirection: 'row', alignItems: 'center'}}
              onPress={() => {
                navigate(NavigationRoutes.APP_STACK.PAYMENT, {
                  PlayerID,
                  Player_Name,
                });
              }}>
              <PaymentsSvg />
              <H5
                text="Payment"
                style={{marginHorizontal: Metrics.baseMargin}}
              />
            </ButtonView>
            <ChevronSvg />
          </ButtonView> */}
     <ButtonView
              onPress={() => {
                navigate(NavigationRoutes.APP_STACK.PROFILE_SETTING);
              }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: Metrics.baseMargin,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <PerformanceSvg />
              <H5
                text="Profile Settings"
                style={{marginHorizontal: Metrics.baseMargin}}
              />
            </View>
          </ButtonView>
          <View style={styles.bottomLine} />
          <ButtonView
            onPress={() => setIsDeleteAccountVisible(true)}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: Metrics.baseMargin,
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <LogoutSvg />
              <H5
                text="Logout"
                style={{marginHorizontal: Metrics.baseMargin}}
              />
            </View>
          </ButtonView>
          <CustomModal
            changeDeleteModalVisible={changeDeleteModalVisible}
            setIsDeleteAccountVisible={setIsDeleteAccountVisible}
            isDeleteAccountVisible={isDeleteAccountVisible}
            title={'Logout'}
            desc={'Are you sure you want to logout?'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  bottomLine: {
    width: '100%',
    height: 1,
    // position: 'absolute',
    backgroundColor: Colors.GREY,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 15,
    // bottom: 0,
    // marginRight: 'auto',
  },
});
