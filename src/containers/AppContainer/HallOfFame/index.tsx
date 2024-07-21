import Header from '@Component/AppHeader';
import HallofFameTabs from '@Component/HallofFameTabs';
import H6 from '@Component/Headings/H6';
import {hallOfFameTabs} from '@Constants/dummyData';
import {Colors} from '@Theme/Colors';
import Metrics from '@Utility/Metrics';
import React from 'react';
import {StyleSheet, View} from 'react-native';

const HallOfFame = () => {
  return (
    <View style={{flex: 1, backgroundColor: Colors.APP_BACKGROUND}}>
      <Header title="Hall of Fame" />
      <View style={{marginHorizontal: 20, flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            marginTop: Metrics.baseMargin,
          }}>
          <H6
            text="Following are the players who demonstrated exemplary performances in the tournaments playing for SOCA"
            style={{
              color: Colors.TEXT_COLOR,
              marginBottom: Metrics.doubleBaseMargin,
              marginTop: Metrics.baseMargin,
            }}
          />
        </View>
        <HallofFameTabs component={hallOfFameTabs} />
      </View>
    </View>
  );
};

export default HallOfFame;

const styles = StyleSheet.create({});
