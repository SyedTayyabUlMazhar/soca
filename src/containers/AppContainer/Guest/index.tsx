import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '@Theme/Colors';
import AppHeader from '@Component/Header/AppHeader';
import Header from '@Component/AppHeader';
import {
  Academy,
  FaqsIcon,
  GoldCup,
  HallOfFame,
  Helmet,
  LOGOSVG,
  LandingPage,
  LandingService,
  Private,
  RightArrowLarge,
  onBoard,
} from '@Asset/logo';
import Metrics from '@Utility/Metrics';
import H2 from '@Component/Headings/H2';
import ButtonView from '@Component/ButtonView';
import {navigate, pop} from '@Service/navigationService';
import NavigationRoutes from '@Navigator/NavigationRoutes';
import H6 from '@Component/Headings/H6';
import H4 from '@Component/Headings/H4';
import Fonts from '@Theme/Fonts';
import H5 from '@Component/Headings/H5';
import H7 from '@Component/Headings/H7';

const Guest = () => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.APP_BACKGROUND}}>
      <Header
        isLogo={true}
        backButton={false}
        actionButton={
          <ButtonView
            onPress={() => {
              pop();
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderWidth: 1,
              borderColor: Colors.DARK_BLUE,
              padding: 10,
              borderRadius: 20,
              marginBottom: 20,
            }}>
            <H6 text={'Login'} style={{color: Colors.WHITE}} />
          </ButtonView>
        }
      />
      <ScrollView style={{flex: 1, marginHorizontal: 20}}>
        <ButtonView onPress={() => navigate(NavigationRoutes.APP_STACK.ABOUT)}>
          <ImageBackground
            source={onBoard}
            resizeMode="cover"
            style={{
              height: 170,
              marginTop: Metrics.doubleBaseMargin,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <LOGOSVG height={Metrics.verticalScale(80)} />

            <H2 text="About SOCA" style={{color: Colors.WHITE}} />
          </ImageBackground>
        </ButtonView>
        <View style={{marginTop: Metrics.verticalScale(18)}}>
          <H6
            style={{color: Colors.ICE_BLUE, alignSelf: 'center'}}
            text={'What we do'}
          />
          <H5
            text={'We teach cricket for all skill levels'}
            style={{
              color: Colors.WHITE,
              alignSelf: 'center',
              marginTop: Metrics.smallMargin,
            }}
          />
          {/* <H6
            text="Consectetur adipiscing elit, sed do eiusmod onsectetur adipiscing elit, sed do eiusm od tempor."
            style={{
              alignSelf: 'center',
              textAlign: 'center',
              ...Fonts.Regular(Fonts.Size.xSmall, Colors.WHITE),
              marginTop: Metrics.smallMargin,
            }}
          /> */}
        </View>
        <ImageBackground
          source={LandingPage}
          resizeMode="cover"
          style={{
            height: 120,
            marginTop: Metrics.doubleBaseMargin,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{alignItems: 'center'}}>
              <H5
                text="HALL OF FAME"
                style={{
                  color: Colors.WHITE,
                  marginLeft: 20,
                  marginTop: Metrics.doubleBaseMargin,
                }}
              />
              <ButtonView
                onPress={() =>
                  navigate(NavigationRoutes.APP_STACK.HALL_OF_FAME)
                }
                style={{
                  backgroundColor: Colors.ICE_BLUE,
                  padding: 6,
                  borderRadius: 6,
                  alignItems: 'center',
                  paddingHorizontal: 20,
                  marginLeft: 20,
                  width: '60%',
                  marginTop: Metrics.baseMargin,
                }}>
                <H7 text="View" style={{color: Colors.DARK_BLACK}} />
              </ButtonView>
            </View>

            <GoldCup style={{marginLeft: Metrics.scale(70)}} />
          </View>
        </ImageBackground>
        <H7
          text="Our Services"
          style={{
            color: Colors.TEXT_COLOR,
            marginTop: 20,
            marginBottom: 5,
          }}
        />
        <ImageBackground
          source={LandingService}
          resizeMode="contain"
          style={{
            height: 80,
            marginTop: 10,
          }}>
          <View style={{flexDirection: 'row', padding: 15}}>
            <Helmet />
            <View style={{marginHorizontal: Metrics.smallMargin}}>
              <H7 text="Services" style={{color: Colors.WHITE}} />
              <H7
                text=" Avail great cricket coaching (groups and private) and rent lanes for cricket practices"
                style={{color: Colors.ICE_BLUE}}
              />
            </View>

          </View>
        </ImageBackground>
        <ButtonView
              onPress={() => navigate(NavigationRoutes.APP_STACK.SERVICES,{isGuest: true})}
              style={{
                backgroundColor: Colors.ICE_BLUE,
                padding: 12,
                borderRadius: 6,
                alignItems: 'center',
                justifyContent: 'center',
                flex: 1,
                marginTop: Metrics.doubleBaseMargin
              }}>
              <H5 text="Avail Service" style={{color: Colors.DARK_BLACK,fontWeight:'500'}} />
            </ButtonView>
        {/* <View
          style={{
            flexDirection: 'row',
            marginTop: Metrics.verticalScale(18),
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              alignItems: 'center',
              padding: 15,
              borderRadius: Metrics.baseMargin,
              flexDirection: 'row',
              backgroundColor: Colors.FAMILY_BACKGROUND,
              width: '48%',
            }}>
            <Academy />
            <View style={{marginLeft: Metrics.smallMargin}}>
              <H6 text="Academy" style={{color: Colors.WHITE}} />
              <H7
                text="Some instruction"
                style={{...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.ICE_BLUE)}}
              />
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              padding: 15,
              borderRadius: Metrics.baseMargin,
              flexDirection: 'row',
              backgroundColor: Colors.FAMILY_BACKGROUND,
              width: '48%',
            }}>
            <Private />
            <View style={{marginLeft: Metrics.smallMargin}}>
              <H6 text="Private" style={{color: Colors.WHITE}} />
              <H7
                text="Some instruction"
                style={{...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.ICE_BLUE)}}
              />
            </View>
          </View>
        </View> */}
      </ScrollView>
    </View>
  );
};

export default Guest;

const styles = StyleSheet.create({});
