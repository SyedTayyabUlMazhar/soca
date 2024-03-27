import {StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatListHandler from '@Component/FlatlistHandler';
import {SessionData, TransactionList} from '@Constants/dummyData';
import Metrics from '@Utility/Metrics';
import H7 from '@Component/Headings/H7';
import H5 from '@Component/Headings/H5';
import {Colors} from '@Theme/Colors';
import Fonts from '@Theme/Fonts';
import H1 from '@Component/Headings/H1';
import useActivityContainer from './ActivityContainer';
import H6 from '@Component/Headings/H6';
import moment from 'moment';
import {DATE_FORMATS} from '@Utility/DateUtils';
import CustomFlatListSeperator from '@Component/CustomFlatListSeperator/CustomFlatListSeperator';
import LinearGradient from 'react-native-linear-gradient';
import H4 from '@Component/Headings/H4';
import {DropDownIcon, EarnedSvg, MisRewardSvg, MisRewards} from '@Asset/logo';
import SpinnerLoader from '@Component/SmallLoader';
import Header from '@Component/AppHeader';
import H2 from '@Component/Headings/H2';

const ActivityScreen = ({route}) => {
  const {getFamilyplayerData,earned_crt_yr,missed_rwds_crt_yr}=route?.params || {}
  const {player_reg_no}=getFamilyplayerData?.data[0]
  const {getActivityData} =useActivityContainer(player_reg_no)
 console.log(getActivityData?.data?.totalCashEarned,'getActivityDatagetActivityDatagetActivityData');
 const {totalCashEarned,totalPointsEarned}=getActivityData?.data||{}
  const renderItem = ({ item }:any) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item?.['Payment date']=== "" ? "N/A" : item?.['Payment date']}</Text>
      <Text style={styles.cell}>{item?.['Earned Cash']}</Text>
      <Text style={styles.cell}>{item?.['Txn Type']}</Text>
      <Text style={styles.cell}>{item?.['Points earned']}</Text>
    </View>
  );

  return (
  <View style={{flex:1,backgroundColor:Colors.APP_BACKGROUND,}}>
    <Header title={"Player Account Activity"}/>
    <View style={{marginHorizontal:20}}>

    <View style={{flexDirection:'row',alignSelf:'center',marginTop:Metrics.doubleBaseMargin}}>
    <View
        style={{
          alignItems: 'center',
          marginTop: Metrics.baseMargin,
          padding: Metrics.scale(40),
          marginHorizontal: Metrics.smallMargin,
          borderRadius: 10,
          paddingVertical: Metrics.doubleBaseMargin,
          backgroundColor:Colors.FAMILY_BACKGROUND
        }}>
        <EarnedSvg />
        <H7 text={"Cash Reward"} style={{color: Colors.ICE_BLUE}} />
        <H6 text={`$${totalCashEarned}`} style={{color: Colors.WHITE}} />

      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: Metrics.baseMargin,
          padding: Metrics.scale(40),
          marginHorizontal: Metrics.smallMargin,
          borderRadius: 10,
          paddingVertical: Metrics.doubleBaseMargin,
          backgroundColor:Colors.FAMILY_BACKGROUND
        }}>
        <MisRewards />
        
        <H7 text={"Points Reward"} style={{color: Colors.ICE_BLUE}} />
        <H6 text={totalPointsEarned} style={{color: Colors.WHITE}} />
      </View>
      </View>
      <H2 text="Transaction History" style={styles.coachingTxt} />
      <View style={styles.playerWrapper}>
                <FlatListHandler
                    data={getActivityData?.data?.user}
                    renderItem={renderItem}
                    ListHeaderComponent={() => (
                        <View style={styles.row}>
                          <Text style={styles.heading}>Date</Text>
                          <Text style={styles.heading}>Transaction</Text>
                          <Text style={styles.heading}>Type</Text>
                          <Text style={styles.heading}>Points</Text>
                        </View>
                      )}
                />
            </View>
    </View>
  </View>
    
 
  );
};

export default ActivityScreen;

const styles = StyleSheet.create({
  playerWrapper: {
    backgroundColor: Colors.FAMILY_BACKGROUND,
    paddingVertical: Metrics.scale(16),
    borderRadius: 16,
    marginTop:Metrics.doubleBaseMargin
},

row: {
  flexDirection: 'row',
  // borderBottomWidth: 1,
  // borderColor: '#ccc',
  paddingVertical: 10,
},
heading: {
  flex: 1,
  fontWeight: 'bold',
  textAlign: 'center',
  color:Colors.DARK_BLUE
},
cell: {
  flex: 1,
  textAlign: 'center',
  color:Colors.WHITE,
  height:'150%'
},
coachingTxt: {
  ...Fonts.SemiBold(Fonts.Size.xSmall, '#98D8FA'),
  marginTop: Metrics.doubleBaseMargin,
  marginBottom:Metrics.verticalScale(15)
},
});
