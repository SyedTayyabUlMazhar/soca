import {CATEGORIES_MAIN} from '@Constants/dummyData';
import * as React from 'react';
import {Image, ScrollView, StyleSheet, View} from 'react-native';

import {
  AgeIcon,
  DummyCircle,
  GirlPlayer,
  LeaguesIcon,
  MalePlayer,
  PlayerImage,
  SilverSmallCup,
  TotalCatches,
  TourneyIcon,
  Trophy,
} from '@Asset/logo';
import Header from '@Component/AppHeader';
import ButtonView from '@Component/ButtonView';
import FlatListHandler from '@Component/FlatlistHandler';
import H2 from '@Component/Headings/H2';
import H3 from '@Component/Headings/H3';
import H4 from '@Component/Headings/H4';
import H7 from '@Component/Headings/H7';
import {Colors, Fonts} from '@Theme/index';
import Metrics from '@Utility/Metrics';
import usePerformanceContainer from './PerformanceContainer';
import useProfileContainer from './ProfileContainer';
import SpinnerLoader from '@Component/SmallLoader';

export default function Performance({route}) {

const {playerData}=route?.params || {}
const {player_reg_no}=playerData||{}

const {getProfileData,PlayerProfileLoading}=useProfileContainer(player_reg_no)



  return (
    <View style={{backgroundColor:Colors.Colors.APP_BACKGROUND, flex: 1}}>
      <Header title="Player Performance" />
      {PlayerProfileLoading?        <View style={{flex:1,backgroundColor:Colors.Colors.APP_BACKGROUND,justifyContent:'center'}}>
          <SpinnerLoader size={'large'} color={Colors.Colors.WHITE} />
            
          </View> :      <ScrollView
        contentContainerStyle={{paddingHorizontal: 15, paddingVertical: Metrics.scale(23),}}>
        <PlayerInfo playerData={getProfileData}/>
        <TotlaGamePlayed playerData={getProfileData} />
        <Attendance playerData={getProfileData}/>
        <FieldingErrors playerData={getProfileData}/>
      </ScrollView>}

    </View>
  );
}

const PlayerInfo = ({playerData}) => {
  console.log(playerData,'playerDataplayerDataplayerDataplayerData');
  
  const {Name,Tier,usacid,ccid,gender,player_age}=playerData?.data||{}
  return (
    <View style={styles.PlayerInfoContainer}>
      <Image source={gender === "Female" ? GirlPlayer : MalePlayer} style={styles.image} />
      <View style={styles.playerInfoInnerWrapper}>
      <View style={styles.ageWrapper}>
        <AgeIcon />
        <H3 text={player_age} style={styles.ageText} />
      </View>
      <H3 text={Name} style={styles.nameText} />
      <View style={{flexDirection:'row'}}>
      <H3 text="USACID: " style={styles.solganText} />
      <H3 text={usacid ? usacid : 'N/A'} style={styles.solganTexts} />
      </View>
      <View style={{flexDirection:'row'}}>
      <H3 text="CCID: " style={styles.solganText} />
      <H3 text={ccid ?ccid : 'N/A' } style={styles.solganTexts}/>
      </View>
    
      <View style={styles.cupWrapper}>
        <SilverSmallCup />
        <H3 text={Tier} style={styles.cupText} />
      </View>
      </View>
    </View>
  );
};

const TotlaGamePlayed = ({playerData}) => {
  const {totalRuns,totalCatches,totalWickets}=playerData?.data||{}
  
  return (
    <View style={styles.totalGamePlayedWrapper}>
      <H2 text="Total games played" style={styles.totalGamePlayedTitle} />
      <View style={styles.totalGameBoxesWrapper}>
        <View style={styles.totalGameBoxesInnerWrapper}>
        <TourneyIcon />
          <H4 text={totalRuns} style={styles.totalGameBoxePrice} />
          <H4 text="Total Runs" style={styles.totalGameBoxeTitle} />
        </View>
        <View
          style={[
            styles.totalGameBoxesInnerWrapper,
            {marginHorizontal: Metrics.scale(13)},
          ]}>
          <LeaguesIcon />
          <H4 text={totalWickets} style={styles.totalGameBoxePrice} />
          <H4 text="Total Wickets" style={styles.totalGameBoxeTitle} />
        </View>
        <View style={styles.totalGameBoxesInnerWrapper}>
          <TotalCatches />
          <H4 text={totalCatches} style={styles.totalGameBoxePrice} />
          <H4 text="Total Catches" style={styles.totalGameBoxeTitle} />
        </View>
      </View>
    </View>
  );
};

const Attendance = ({playerData}) => {
  const {coaching_attendance}=playerData?.data||{}
  return (
    <View style={styles.attendanceWrapper}>
      <H2 text="Attendance" style={styles.totalGamePlayedTitle} />
      <View style={styles.attendanceBoxWrapper}>
        <View style={styles.leftSect}>
          <H4 text={coaching_attendance} style={styles.leftTitle}/>
          <H4 text='out of 100' style={styles.leftSubTitle}/>
        </View>
        <View style={styles.rightSect}>
           <H4 text={coaching_attendance} style={styles.rightTitle}/>
           {/* <DummyCircle /> */}
        </View>
      </View>
    </View>
  );
};

const FieldingErrors = ({playerData}) => {
  
  const {catch_drops,full_toss,mis_runouts,misfields,missed_stumpings,short_balls}=playerData?.data?.fieldingErrors || {}

  return (
    <View>
      <H2
        text="Fielding errors this year"
        style={styles.totalGamePlayedTitle}
      />
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <ButtonView style={styles.catMainWrapper}>
        <View style={styles.cateTextWrapper}>
          <H4 text={"Catch Drops"} style={styles.cateTitle} />
          <H7 text={catch_drops} style={styles.cateTagLine} />
        </View>
      </ButtonView>
      <ButtonView style={styles.catMainWrapper}>
        <View style={styles.cateTextWrapper}>
          <H4 text={"Misfields"} style={styles.cateTitle} />
          <H7 text={misfields} style={styles.cateTagLine} />
        </View>
      </ButtonView>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <ButtonView style={styles.catMainWrapper}>
        <View style={styles.cateTextWrapper}>
          <H4 text={"Missed R/O"} style={styles.cateTitle} />
          <H7 text={mis_runouts} style={styles.cateTagLine} />
        </View>
      </ButtonView>
      <ButtonView style={styles.catMainWrapper}>
        <View style={styles.cateTextWrapper}>
          <H4 text={"Full Toss"} style={styles.cateTitle} />
          <H7 text={full_toss} style={styles.cateTagLine} />
        </View>
      </ButtonView>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <ButtonView style={styles.catMainWrapper}>
        <View style={styles.cateTextWrapper}>
          <H4 text={"Short Balls"} style={styles.cateTitle} />
          <H7 text={short_balls} style={styles.cateTagLine} />
        </View>
      </ButtonView>
      <ButtonView style={styles.catMainWrapper}>
        <View style={styles.cateTextWrapper}>
          <H4 text={"Miss Stumpings"} style={styles.cateTitle} />
          <H7 text={missed_stumpings} style={styles.cateTagLine} />
        </View>
      </ButtonView>
      </View>
       
   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginHorizontal: 25,
    color: Colors.Colors.WHITE,
    marginBottom: Metrics.baseMargin,
    textAlign: 'center',
  },

  PlayerInfoContainer: {
    flexDirection: 'row'
  },
  image: {
    width: Metrics.scale(139),
    height: Metrics.scale(165),
    borderRadius: 15,
    overflow: 'hidden',
  },
  playerInfoInnerWrapper:{
    marginLeft: Metrics.scale(14)
  },
  ageWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cupWrapper:{
    borderWidth: 1,
    borderColor: Colors.Colors.DARK_BLUE,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
    paddingVertical: 10,
    marginTop: Metrics.scale(11)
  },
  cupText:{
    ...Fonts.SemiBold(Fonts.Size.xSmall, Colors.Colors.WHITE),
    marginLeft: Metrics.scale(8)
  },
  ageText: {
    ...Fonts.Regular(Fonts.Size.mLarge, Colors.Colors.DARK_BLUE),
    lineHeight: 24,
    marginLeft: Metrics.scale(5),
  },
  nameText: {
    ...Fonts.Bold(Fonts.Size.large, Colors.Colors.WHITE),
    marginBottom: Metrics.scale(8),
    width:'70%'
  },
  solganText: {
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.WHITE),
  },
  solganTexts: {
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.ICE_BLUE),
  },
  totalGameBoxesWrapper: {
    flexDirection: 'row',
  },
  totalGameBoxesInnerWrapper: {
    alignItems: 'center',
    width: '31%',
    borderWidth: 1,
    borderColor: Colors.Colors.DARK_BLUE,
    borderRadius: 13,
    paddingTop: Metrics.scale(15),
    paddingBottom: Metrics.scale(16),
  },
  totalGameBoxePrice: {
    ...Fonts.SemiBold(Fonts.Size.normal, Colors.Colors.WHITE),
    marginTop: Metrics.scale(10),
    marginBottom: Metrics.scale(5),
  },
  totalGameBoxeTitle: {
    ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.DARK_BLUE),
  },
  totalGamePlayedTitle: {
    ...Fonts.SemiBold(Fonts.Size.xSmall, '#98D8FA'),
    marginBottom: Metrics.scale(13),
  },
  totalGamePlayedWrapper: {
    marginTop: Metrics.scale(28),
    marginBottom: Metrics.scale(25),
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    paddingRight: 1,
  },
  cateTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  catMainWrapper: {
    width: '48%',
    borderRadius: 10,
    padding: Metrics.scale(13),
    backgroundColor: '#0A182C',
    marginBottom: 12,
  },
  cateTitle: {
    ...Fonts.Medium(Fonts.Size.xSmall, Colors.Colors.DARK_BLUE),
  },
  cateTagLine: {
    ...Fonts.Medium(Fonts.Size.normal, Colors.Colors.WHITE),
  },
  attendanceWrapper:{
    marginBottom: Metrics.scale(25)
  },
  attendanceBoxWrapper:{
    backgroundColor: Colors.Colors.FAMILY_BACKGROUND,
    borderRadius: 10,
    paddingHorizontal: Metrics.scale(13),
    paddingTop: Metrics.scale(15),
    paddingBottom: Metrics.scale(16),
    flexDirection: "row",
    justifyContent: 'space-between'
  },
  leftSect:{
    justifyContent: 'center',
  },
  rightSect:{
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center'
  },
  leftTitle:{
    ...Fonts.SemiBold(Fonts.Size.normal, Colors.Colors.WHITE),
  },
  leftSubTitle:{
    ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.Colors.DARK_BLUE),
  },
  rightTitle:{
    ...Fonts.SemiBold(Fonts.Size.xhuge, Colors.Colors.TEXT_COLOR),
    marginRight: Metrics.scale(13)
  }
});
