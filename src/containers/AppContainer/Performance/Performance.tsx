import H1 from '@Component/Headings/H1';
import TopTabs from '@Component/Tabs/TopTabs';
import {performanceTabs} from '@Constants/dummyData';
import * as React from 'react';
import {FlatList, ScrollView, StyleSheet, View} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Metrics from '@Utility/Metrics';
import {Colors} from '@Theme/Colors';
import usePerformanceContainer from './PerformanceContainer';
import H3 from '@Component/Headings/H3';
import FlatListHandler from '@Component/FlatlistHandler';
import H5 from '@Component/Headings/H5';
import CustomFlatListSeperator from '@Component/CustomFlatListSeperator/CustomFlatListSeperator';
import H2 from '@Component/Headings/H2';
import {Col, Grid, Row} from 'react-native-easy-grid';
import H7 from '@Component/Headings/H7';
import H6 from '@Component/Headings/H6';

export default function Performance({route}) {
  console.log(route, 'routerouteroute');

  const {PlayerID, Player_Name} = route?.params;
  const {getPerformanceData} = usePerformanceContainer(PlayerID);
  const data = getPerformanceData?.data?.Tournaments || {};
  const battingData = getPerformanceData?.data?.Batting || {};
  const FieldingData = getPerformanceData?.data?.Fielding || {};
  const BowlingData = getPerformanceData?.data?.Bowling || {};

  console.log(BowlingData, 'BowlingDataBowlingDataBowlingDataBowlingData');

  const dataArray = Object.entries(data)?.map(([key, value]) => {
    let name = '';

    // Assign custom names based on the key
    switch (key) {
      case 'LocalLeagues':
        name = 'Local Leagues';
        break;
      case 'MLCJRCHAMP':
        name = 'MLCJR Championship';
        break;
      case 'T20Tourneys':
        name = 'Local Tourneys';
        break;
      // Add more cases as needed

      // Default case: use the key as the name
      default:
        name = key;
    }

    return {
      name,
      value,
    };
  });

  const battingArray = Object.entries(battingData).map(([key, value]) => {
    let name = '';

    switch (key) {
      case 'BattingAve':
        name = 'Batting Average';
        break;
      case 'Fiftees':
        name = 'Fifties';
        break;
      case 'Highest':
        name = 'Highest Score';
        break;
      case 'Hundreds':
        name = 'Hundreds';
        break;
      case 'RunsScored':
        name = 'Runs Scored';
        break;
      case 'StrikeRate':
        name = 'Strike Rate';
        break;
      default:
        name = key;
    }

    return {
      name,
      value,
    };
  });
  const fieldingArray = Object.entries(FieldingData).map(([key, value]) => {
    let name = '';

    switch (key) {
      case 'Catches':
        name = 'Catches';
        break;
      case 'DirectRunOuts':
        name = 'Direct Run Outs';
        break;
      case 'IndirectRunOuts':
        name = 'Indirect Run Outs';
        break;
      case 'WkDism':
        name = 'Wicket Dismissals';
        break;
      default:
        name = key;
    }

    return {
      name,
      value,
    };
  });
  const bowlingArray = Object.entries(BowlingData).map(([key, value]) => {
    let name = '';

    switch (key) {
      case 'Average':
        name = 'Bowling Average';
        break;
      case 'DotBallPercentage':
        name = 'Dot Ball Percentage';
        break;
      case 'Economy':
        name = 'Economy';
        break;
      case 'FiveW':
        name = 'Five Wicket Hauls';
        break;
      case 'FourW':
        name = 'Four Wicket Hauls';
        break;
      case 'Hatrick':
        name = 'Hat-trick';
        break;
      case 'OversBowled':
        name = 'Overs Bowled';
        break;
      case 'StrikeRate':
        name = 'Strike Rate';
        break;
      case 'Wickets':
        name = 'Wickets';
        break;
      default:
        name = key;
    }

    return {
      name,
      value,
    };
  });
  console.log(
    getPerformanceData,
    'getPerformanceDatagetPerformanceDatagetPerformanceData',
  );

  return (
    <>
      <LinearGradient
        colors={['#09203F', '#537895']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          backgroundColor: '#374051',
          //   alignItems: 'center',
          // paddingBottom: Metrics.scale(20),
          paddingTop: Metrics.verticalScale(50),
          borderBottomLeftRadius: Metrics.scale(30),
          borderBottomRightRadius: Metrics.scale(30),
          paddingBottom: 20,
          // height: '100%',
        }}>
        <H2 text={'2023- Performance Stats'} style={styles.text} />
        <H3
          text={Player_Name}
          style={{
            color: Colors.WHITE,
            marginHorizontal: 20,
            marginTop: Metrics.smallMargin,
          }}
        />
      </LinearGradient>
      <ScrollView>
        <View
          style={{
            marginHorizontal: 20,
            marginTop: Metrics.verticalScale(20),
          }}>
          <H3 text="Total Games" style={{textAlign: 'center'}} />
          <FlatList
            renderItem={({item}) => (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: Metrics.verticalScale(20),
                }}>
                <H6 text={item.name} />
                <H6 text={item.value} />
              </View>
            )}
            data={dataArray}
            keyExtractor={item => item.name}
            ItemSeparatorComponent={() => {
              return <CustomFlatListSeperator />;
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: 2,
            backgroundColor: Colors.INPUT_BORDER_COLOR,
          }}
        />
        <Grid>
          <Col>
            <Row
              style={{
                alignSelf: 'center',
              }}>
              <View
                style={{
                  // marginHorizontal: 20,
                  marginTop: Metrics.verticalScale(20),
                  marginBottom: 10,
                }}>
                <H3 text="Batting" style={{textAlign: 'center'}} />
                <FlatList
                  renderItem={({item}) => (
                    <View
                      style={{
                        // flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: Metrics.verticalScale(20),
                        marginHorizontal: 10,
                        alignItems: 'center',
                      }}>
                      <H6 text={item.name} />
                      <H6 text={item.value} />
                    </View>
                  )}
                  data={battingArray}
                  keyExtractor={item => item.name}
                  ItemSeparatorComponent={() => {
                    return <CustomFlatListSeperator />;
                  }}
                />
              </View>
            </Row>
            <View
              style={{
                width: '100%',
                height: 2,
                backgroundColor: Colors.INPUT_BORDER_COLOR,
              }}
            />
            <Row style={{alignSelf: 'center'}}>
              <View
                style={{
                  // marginHorizontal: 10,
                  marginTop: Metrics.verticalScale(20),
                }}>
                <H3 text="Fielding" style={{textAlign: 'center'}} />
                <FlatList
                  renderItem={({item}) => (
                    <View
                      style={{
                        // flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginVertical: Metrics.verticalScale(20),
                        // marginHorizontal: 30,
                        // marginHorizontal: 10,
                        alignItems: 'center',
                      }}>
                      <H6 text={item.name} />
                      <H6 text={item.value} />
                    </View>
                  )}
                  data={fieldingArray}
                  keyExtractor={item => item.name}
                  ItemSeparatorComponent={() => {
                    return <CustomFlatListSeperator />;
                  }}
                />
              </View>
            </Row>
          </Col>
          <Col>
            <View
              style={{
                // marginHorizontal: 20,
                borderColor: Colors.INPUT_BORDER_COLOR,
                borderLeftWidth: 1,
                height: '100%',
              }}>
              <H3
                text="Bowling"
                style={{
                  textAlign: 'center',
                  marginTop: Metrics.verticalScale(20),
                }}
              />
              <FlatList
                renderItem={({item}) => (
                  <View
                    style={{
                      // flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginVertical: Metrics.verticalScale(20),
                      alignItems: 'center',
                    }}>
                    <H6 text={item.name} />
                    <H6 text={item.value} />
                  </View>
                )}
                data={bowlingArray}
                keyExtractor={item => item.name}
                ItemSeparatorComponent={() => {
                  return (
                    <CustomFlatListSeperator
                      customStyle={{width: '80%', alignSelf: 'center'}}
                    />
                  );
                }}
              />
            </View>
          </Col>
        </Grid>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 30,
  },
  text: {
    marginHorizontal: 25,
    color: Colors.WHITE,
    marginBottom: Metrics.baseMargin,
    textAlign: 'center',
  },
});
