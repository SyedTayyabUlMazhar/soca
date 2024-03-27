import { ArrowDown, FaqsIcon } from '@Asset/logo';
import Header from '@Component/AppHeader';
import ButtonView from '@Component/ButtonView';
import H2 from '@Component/Headings/H2';
import H4 from '@Component/Headings/H4';
import H5 from '@Component/Headings/H5';
import H6 from '@Component/Headings/H6';
import { Colors, Fonts } from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import useAllPerformanceContainer from './AllPerformanceContainer';
import PlayerSelectionModal from './PlayerSelectionModal';


const PlayerStatistics = ({playerId}) => {
    
    const {playerPerformanceData} = useAllPerformanceContainer(playerId);
  console.log(playerPerformanceData,'playerPerformanceDataplayerPerformanceDataplayerPerformanceDataplayerPerformanceData');
  
    if (!playerPerformanceData || !playerPerformanceData?.data) {
      return null; // Handle case when data is not available
    }
  
    const categories = Object.keys(playerPerformanceData?.data);
    const metrics = Object.keys(playerPerformanceData?.data[categories[0]]).slice(
      2,
    );
  
    return (
      <View style={styles.PlayerStatisticsWrapper}>
        <H2 text="Player statistics" style={styles.overAllPerformanceText} />
        <View style={styles.container}>
          <View style={styles.row}>
            <View style={[styles.cell, styles.emptyCell]} />
            {categories?.map((category, index) => (
              <View key={index} style={[styles.cell, styles.headerCell]}>
                <Text
                  style={[styles.checkingText, {color: Colors.Colors.ICE_BLUE}]}>
                  {category}
                </Text>
              </View>
            ))}
          </View>
          {metrics?.map((metric, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              <View style={[styles.cell, styles.emptyCell]}>
                <Text style={styles.checkingTexts}>{metric}</Text>
              </View>
              {categories.map((category, colIndex) => (
                <View key={colIndex} style={styles.cell}>
                  <Text style={styles.checkingText}>
                    {playerPerformanceData.data[category][metric]}
                  </Text>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>
    );
  };
  

export default PlayerStatistics

const styles = StyleSheet.create({
    overAllPerformanceWrapper: {
      marginBottom: Metrics.scale(20),
    },
    overAllPerformanceInnerWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    overAllPerformanceText: {
      ...Fonts.SemiBold(Fonts.Size.xSmall, '#98D8FA'),
    },
    overAllPerformanceBtnText: {
      ...Fonts.Medium(Fonts.Size.xxxSmall, Colors.Colors.WHITE),
      textDecorationLine: 'underline',
      marginRight: Metrics.scale(5),
    },
    overAllPerformanceBoxWrapper: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      backgroundColor: '#0A182C',
      paddingVertical: Metrics.scale(13),
      borderRadius: 10,
      marginTop: Metrics.scale(13),
    },
    overAllPerformanceInnersingleBox: {},
    overAllPerformanceInnersingleBoxLabel: {
      ...Fonts.Medium(Fonts.Size.normal, Colors.Colors.DARK_BLUE),
      marginBottom: Metrics.scale(11),
    },
    overAllPerformanceInnersingleBoxDesc: {
      ...Fonts.Medium(Fonts.Size.normal, Colors.Colors.WHITE),
    },
    checkingText: {
      ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.WHITE),
    },
    firstCellLabel: {
      ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.DARK_BLUE),
      flex: 1,
    },
    checkingTexts: {
      ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.ICE_BLUE),
    },
  
    // container: {
    //     flex: 1,
    //     padding: 10,
    //     borderBottomWidth: 1,
    //     borderColor: "#003D57"
    // },
    row: {
      flexDirection: 'row',
    },
    cell: {
      flex: 1,
      paddingVertical: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    emptyCell: {
      flex: 0.5, // Adjust width for empty cell
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
  });