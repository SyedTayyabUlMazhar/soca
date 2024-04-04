import { ArrowDown, FaqsIcon } from '@Asset/logo';
import Header from '@Component/AppHeader';
import ButtonView from '@Component/ButtonView';
import H2 from '@Component/Headings/H2';
import H4 from '@Component/Headings/H4';
import H5 from '@Component/Headings/H5';
import H6 from '@Component/Headings/H6';
import { Colors, Fonts } from '@Theme/index';
import Metrics from '@Utility/Metrics';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import useAllPerformanceContainer from './AllPerformanceContainer';
import PlayerSelectionModal from './PlayerSelectionModal';
import { useBoundStore } from '@Store/index';

const Performance = ({route}) => {
  const setPlayerPerformanceIDZustand = useBoundStore(state => state.setPlayerPerformanceIDZustand);
const {getFamilyplayerData,refetchPlayerPerformanceData}=useAllPerformanceContainer(playerId)
const [refreshKey, setRefreshKey] = useState(0); // State to trigger re-rende
  const [isDeleteAccountVisible, setIsDeleteAccountVisible] =
    React.useState(false);
    const { Player_Name, player_reg_no } = getFamilyplayerData?.data?.[0] || {};
  const [playerName, setPlayerName] = useState(Player_Name);
  const [playerId,setPlayerId]=useState(player_reg_no)

// setPlayerName(Player_Name);
// setPlayerId(player_reg_no);
// useEffect(() => {
//     // After getting player data, initialize playerName and playerId
//     const { Player_Name, player_reg_no } = getFamilyplayerData?.data?.[0] || {};
//     setPlayerName(Player_Name);
//     setPlayerId(player_reg_no);
//   }, [getFamilyplayerData]);
const playerPerformanceID = useBoundStore(state => state.playerPerformanceID);


  const changeDeleteModalVisible = player => {

    refetchPlayerPerformanceData()

    setPlayerName(player?.Player_Name);
    setPlayerId(player?.player_reg_no);
    setPlayerPerformanceIDZustand(player?.player_reg_no)
    setRefreshKey(prevKey => prevKey + 1);
  };
  useEffect(() => {
    if(playerPerformanceID ||playerId ==undefined ){
      refetchPlayerPerformanceData()

    }
    // Your effect code here
    // This effect will be triggered whenever refreshKey changes
  }, [refreshKey]);
 
  return (
    <ScrollView key={refreshKey}  style={{backgroundColor: Colors.Colors.APP_BACKGROUND, flex: 1}} >
      <Header
        backButton={false}
        desc={'Performance'}
        actionButton={
          <ButtonView
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: Colors.Colors.DARK_BLUE,
              borderRadius: 20,
              padding: 10,
            }}
            onPress={() => setIsDeleteAccountVisible(true)}>
            <H6 text={playerName} style={{color: Colors.Colors.WHITE}} />
            <FaqsIcon style={{marginHorizontal: Metrics.smallMargin}} />
          </ButtonView>
        }
      />

  <ScrollView
    contentContainerStyle={{
      paddingHorizontal: 15,
      paddingVertical: Metrics.scale(23),
    }}
  >
    <OverAllPerformance  playerId={playerId}/>
    <PlayerStatistics playerId={playerId}/>
  </ScrollView>
      <PlayerSelectionModal
        changeDeleteModalVisible={changeDeleteModalVisible}
        setIsDeleteAccountVisible={setIsDeleteAccountVisible}
        isDeleteAccountVisible={isDeleteAccountVisible}
        players={getFamilyplayerData?.data}
        title={'Logout'}
        desc={'Are you sure you want to logout?'}
      />
    </ScrollView>
  );
};

const OverAllPerformance = ({playerId}) => {
  const {playerPerformanceData} = useAllPerformanceContainer(playerId);
  console.log(playerPerformanceData,'playerPerformanceDataplayerPerformanceDataplayerPerformanceDataplayerPerformanceData');
  const {Higest,TotalRuns}=playerPerformanceData?.data||{}
  return (
    <View style={styles.overAllPerformanceWrapper}>
      <View style={styles.overAllPerformanceInnerWrapper}>
        <H2 text="Over all performance" style={styles.overAllPerformanceText} />
        {/* <ButtonView style={{flexDirection: 'row', alignItems: 'center'}}>
          <H4 text="View All" style={styles.overAllPerformanceBtnText} />
          <ArrowDown />
        </ButtonView> */}
      </View>
      <View style={styles.overAllPerformanceBoxWrapper}>
        <View style={styles.overAllPerformanceInnersingleBox}>
          <H2 text="Mat" style={styles.overAllPerformanceInnersingleBoxLabel} />
          <H5 text="000" style={styles.overAllPerformanceInnersingleBoxDesc} />
        </View>
        <View style={styles.overAllPerformanceInnersingleBox}>
          <H2
            text="Inns"
            style={styles.overAllPerformanceInnersingleBoxLabel}
          />
          <H5 text="000" style={styles.overAllPerformanceInnersingleBoxDesc} />
        </View>
        <View style={styles.overAllPerformanceInnersingleBox}>
          <H2 text="MO" style={styles.overAllPerformanceInnersingleBoxLabel} />
          <H5 text="000" style={styles.overAllPerformanceInnersingleBoxDesc} />
        </View>
        <View style={styles.overAllPerformanceInnersingleBox}>
          <H2
            text="Runs"
            style={styles.overAllPerformanceInnersingleBoxLabel}
          />
          <H5 text={TotalRuns} style={styles.overAllPerformanceInnersingleBoxDesc} />
        </View>
        <View style={styles.overAllPerformanceInnersingleBox}>
          <H2 text="HS" style={styles.overAllPerformanceInnersingleBoxLabel} />
          <H5 text={Higest} style={styles.overAllPerformanceInnersingleBoxDesc} />
        </View>
      </View>
    </View>
  );
};

const PlayerStatistics = ({playerId}) => {
    
  const {playerPerformanceData,refetchPlayerPerformanceData} = useAllPerformanceContainer(playerId);

useEffect(() => {
// console.log(playerPerformanceData?.data?.data, "555555555555555555555555555555555555555555")
},[playerPerformanceData?.data?.data])

  if (!playerPerformanceData || !playerPerformanceData?.data?.data) {
    return null; // Handle case when data is not available
  }

  const categories = Object.keys(playerPerformanceData?.data?.data);
  const metrics = Object.keys(playerPerformanceData?.data?.data[categories[0]]).slice(
    2,
  );

  return (
    <View >
      <H2 text="Player statistics" style={styles.overAllPerformanceText} />
      <View >
        <View style={styles.row}>
          <View style={[styles.cell, styles.emptyCell]} />
          {categories?.map((category, index) => (
            <View key={index} style={[styles.cell, styles.headerCell]}>
              <Text
                style={[styles.checkingText, {color: Colors.Colors.ICE_BLUE,}]}>
                {category}
              </Text>
            </View>
          ))}
        </View>
        {metrics?.map((metric, rowIndex) => (
            <Metric metric={metric} rowIndex={rowIndex} categories={categories} playerPerformanceData={playerPerformanceData}/>
  
        ))}
      </View>
    </View>
  );
};
const Metric = ({ metric, rowIndex, categories, playerPerformanceData }: any) => {
  
    const metricAbbreviations: { [key: string]: string } = {
        'Wickets': 'Wkt',
        'Economy': 'Eco',
        'Average': 'Avg',
        'Strike Rate': 'SR',
        'Overs Bowled': 'Ovr',
        'Dot Balls (%)': 'Dot',
        'Hatrick': 'Hat',
        '4W': '4W',
        '5W': '5W',
        'Runs Scored': 'Runs',
        'Batting Ave': 'Bat Avg',
        'Highest': 'High',
        '100\'s': '100s',
        '50\'s': '50s',
        'Catches': 'Ct',
        'Direct R/Os': 'Direct R/O',
        'Wk Dismisals': 'Wk Dis',
        'Indirect R/Os': 'InDirect R/O',
        'Dot Balls': 'Dot',
        'Wk Catches': 'Wk Ct',
        'Stumpings': 'Stmp'
    };

    const abbreviation = metricAbbreviations[metric] || metric;

    // Check if the abbreviation exceeds 4 characters
    const shouldSplit = abbreviation.length > 4;

    // Split the abbreviation into two lines if necessary
    const firstLine = shouldSplit ? abbreviation.substring(0, 4) : abbreviation;
    const secondLine = shouldSplit ? abbreviation.substring(4) : '';

    return (
        <View key={rowIndex} style={styles.row}>
            <View style={[styles.cell, styles.emptyCell]}>
                <Text numberOfLines={2} style={[styles.checkingTexts, styles.metricText]}>
                    {abbreviation}
                     {/* {firstLine}
                    {shouldSplit && '\n' + secondLine}  */}
                </Text>
            </View>
            {categories.map((category, colIndex) => (
                <View key={colIndex} style={styles.cell}>
                    <Text style={styles.checkingText}>
                        {playerPerformanceData.data?.data[category][metric]}
                    </Text>
                </View>
            ))}
        </View>
    )
}

export default Performance;

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
    // marginHorizontal:10,
 
  },
  firstCellLabel: {
    ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.DARK_BLUE),
    flex: 1,
  },
  checkingTexts: {
    ...Fonts.Medium(Fonts.Size.xxxxSmall, Colors.Colors.ICE_BLUE),
    width:'120%'
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
//   metricText: {
//     minWidth: 30, // Adjust the width as needed
//   },
});
